<script setup lang="ts">

</script>

<script lang="ts">
import PlayerProperty from "~/entity/monopoly/PlayerProperty";
import monopolySchemes from '~/entity/monopoly/monopolySchemes.js';
import GameScheme from "~/entity/monopoly/GameScheme";
import Player from "~/entity/monopoly/Player";
import GamePropertyUpgrade from "~/entity/monopoly/GamePropertyUpgrade";
import GameData from "~/entity/monopoly/GameData";
import type GameOperation from "~/entity/monopoly/GameOperation";
import type GamePropertyItem from "~/entity/monopoly/GamePropertyItem";

export default {
  data() {
    return {
      schemes: {
        list: monopolySchemes,
        currentId: null
      },
      player: new Player(),
      operations: {
        list: [],
        current: null,
        targetId: null,
        inputAmount: 0
      }
    } as GameData
  },
  mounted() {
    if (localStorage['schemes.currentId']) {
      this.schemes.currentId = localStorage['schemes.currentId'];
      this.selectScheme();
    }
    if (localStorage['player.balance']) {
      this.player.balance = localStorage['player.balance'];
    }
    if (localStorage['player.properties']) {
      this.player.properties = JSON.parse(localStorage['player.properties']) as Array<PlayerProperty>;
    }
  },
  methods: {
    showError(e) {
      alert(e.message);
    },
    selectScheme() {
      this.player.init(this.currentScheme?.startBalance ?? 0);
      this.operations.list = this.currentScheme?.operations.map(item => item as GameOperation) ?? []
    },
    selectOperation(operation: GameOperation) {
      this.operations.current = operation
    },
    resetTarget() {
      this.operations.targetId = null
      this.operations.current = null
      this.operations.inputAmount = 0
    },
    buyProperty() {
      if (!confirm('Купить собственность?')) {
        return
      }
      try {
        this.decBalance(this.currentOperationTarget?.upgrades[0].price ?? 0)
        this.player.properties.push({
          property: this.currentOperationTarget,
          level: 1,
          currentUpgrade: this.currentOperationTarget?.upgrades.find(item => item.level === 1)
        } as PlayerProperty)
        this.resetTarget()
        localStorage['player.properties'] = JSON.stringify(this.player.properties)

      } catch (e) {
        this.showError(e.message)
      }
    },
    buyPropertyByAuction() {
      if (!confirm('Купить собственность?')) {
        return
      }
      try {
        this.decBalance(this.operations.inputAmount)
        this.player.properties.push({
          property: this.currentOperationTarget,
          level: 1,
          currentUpgrade: this.currentOperationTarget?.upgrades.find(item => item.level === 1)
        } as PlayerProperty)
        this.resetTarget()
        localStorage['player.properties'] = JSON.stringify(this.player.properties)

      } catch (e) {
        this.showError(e.message)
      }
    },
    upgradeProperty() {
      try {
        const current = this.currentPlayerTarget;
        if (!current) {
          throw new Error('Unknown property')
        }
        const nextUpgrade = current.property.upgrades.find(item => item.level === current.currentUpgrade.level + 1) ?? null
        if (!nextUpgrade) {
          throw new Error('Upgrade impossible')
        }
        this.decBalance(nextUpgrade.price)
        const price = current.currentUpgrade.price;
        const propId = current.property.id;
        this.player.properties.forEach(item => {
          if (item.property.id !== propId) {
            return item;
          }
          item.currentUpgrade = nextUpgrade
          item.currentUpgrade.price += price;
          return item;
        })
        this.resetTarget()
        localStorage['player.properties'] = JSON.stringify(this.player.properties)

      } catch (e) {
        this.showError(e.message)
      }
    },
    decBalance(value:number) {
      if (value > this.player.balance) {
        throw new Error('Low balance');
      }
      if (value === 0) {
        throw new Error('Incorrect price');
      }
      this.player.balance = +this.player.balance - +value
    },
    incBalance(value:number) {
      this.player.balance = +this.player.balance + +value
    },
    payRent() {
      try {
        const value = this.operations.inputAmount;
        if (value > this.player.balance) {
          throw new Error('Low balance');
        }
        this.decBalance(value)
        this.resetTarget()

      } catch (e) {
        this.showError(e.message)
      }
    },
    clickGetRent(item:PlayerProperty) {
      this.selectOperation({id:'income', name:''} as GameOperation)
      if (item.property.type === 'city') {
        this.operations.inputAmount = item.currentUpgrade.tax;
      }
    },
    clickUpgrade(item:PlayerProperty) {
      this.selectOperation({id:'upgrade', name:''} as GameOperation)
      if (item.property.type === 'city') {
        this.operations.targetId = item.property.id;
      }
    },
    getIncome() {
      try {
        const value = this.operations.inputAmount;
        this.incBalance(value)
        this.resetTarget()

      } catch (e) {
        this.showError(e.message)
      }
    },

    getRoundIncome() {
      try {
        const value = this.currentScheme?.roundIncomeAmount ?? 0;
        this.incBalance(value)
        this.resetTarget()

      } catch (e) {
        this.showError(e.message)
      }
    },

    confirmSell(item) {
      const price1 = item.property.upgrades[0].price;
      if (confirm(`Продать другому игроку за ${price1}?`)) {
        try {
          this.player.properties = this.player.properties.filter((prop:PlayerProperty) => prop.property.id !== item.property.id)
          this.incBalance(price1)
          this.resetTarget()
          localStorage['player.properties'] = JSON.stringify(this.player.properties)

        } catch (e) {
          this.showError(e.message)
        }

      }
    },

    confirmPawn(item) {
      console.log(item)
      if (confirm('Заложить собственность банку?')) {

      }
    }
  },
  computed: {
    currentScheme(): GameScheme|null {
      return this.schemes.list.find(item => item.id === this.schemes.currentId) ?? null
    },
    availableProperties(): Array<GamePropertyItem> {
      return this.currentScheme?.properties
          .filter(item => !this.player.properties.map(item => item.property.id).includes(item.id))
          .map(item => item.id);
    },
    currentOperationTarget(): GamePropertyItem|null {
      return this.currentScheme?.properties.find(item => item.id === this.operations.targetId) ?? null
    },
    availablePlayerUpgrades(): Array<string> {
      function hasNextLevel (property:GamePropertyItem, currentLevel:number) {
        return property.upgrades.find(item => item.level > currentLevel)?.level ?? false;
      }
      return this.player.properties
          .filter(item => hasNextLevel(item.property, item.currentUpgrade.level))
          .map(item => item.property.id)
    },
    currentPlayerTarget(): PlayerProperty|null {
      return this.player.properties.find(item => item.property.id === this.operations.targetId) ?? null;
    },
    nextUpgrade(): GamePropertyUpgrade {
      const currentLevel = this.currentPlayerTarget?.currentUpgrade.level ?? 0;
      const defaultUp = {level: 0, tax: 0, price: 0} as GamePropertyUpgrade;
      return this.currentOperationTarget?.upgrades.find(item => item.level === currentLevel + 1) ?? defaultUp;
    }
  },
  watch: {
    'schemes.currentId': (value) => {
      localStorage['schemes.currentId'] = value;
    },
    'player.balance': (value) => {
      localStorage['player.balance'] = value;
    },
  }
}

//
// // -- Dices
// const diceIcons = ['i-mdi-dice-1', 'i-mdi-dice-2','i-mdi-dice-3','i-mdi-dice-4','i-mdi-dice-5','i-mdi-dice-6',];
// const dice = ref('i-mdi-dice')
//
// const randDice = () => {
//   const randInt:number = (Math.floor(Math.random() * 6)) + 1;
//   dice.value = `i-svg-spinners-tadpole`;
//   setTimeout(() => {
//     dice.value = `i-mdi-dice-${randInt}`;
//   }, 2000);
// }
//

</script>

<template>
  <ClientOnly>
    <main class="bg">

      <UContainer class="monopoly-layout">
        <div class="row">
          <div class="label">Схема</div>
          <div class="input">
            <USelect v-model="schemes.currentId" :options="schemes.list" option-attribute="name" value-attribute="id" @change="selectScheme" />
          </div>
        </div>
        <div class="row">
          <div class="label">
            <!-- UButton
                icon="i-heroicons-light-bulb"
                size="sm"
                color="primary"
                variant="solid"
                label="Random 1-6"
                dynamic
                :trailing="false"
                @click="randDice"
            / -->
          </div>
          <div class="input">
            <!-- UIcon :name="dice" class="icon-h100" dynamic / -->
          </div>
        </div>
        <div class="row">
          <div class="label">Ваш баланс</div>
          <div class="input">
            <UInput color="primary" variant="outline" v-model="player.balance" />
          </div>
        </div>

        <div class="row mt-5">
          <h5 class="label">Действия</h5>
        </div>
        <div class="row" v-if="operations.list">
            <UButton
                class="btn-shrink"
                v-for="item of operations.list"
                size="sm"
                color="primary"
                :label="item.name"
                :variant="item.id === operations.current?.id ? 'solid' : 'outline'"
                @click="selectOperation(item)"
            />
        </div>

        <!-- Operation: buy -->
        <div class="row" v-if="operations.current?.id === 'buy'">
          <div class="row">
            <USelect class="w-30" v-model="operations.targetId" :options="availableProperties" />
            <UInput color="primary"
                    class="w-30"
                    variant="outline"
                    disabled
                    :model-value="currentOperationTarget?.upgrades[0].price">
              <template #leading>
                <span class="text-gray-500 dark:text-gray-400 text-xs">$</span>
              </template>
            </UInput>
            <UButton
                class="w-30"
                color="cyan"
                label="Покупка"
                variant="soft"
                :disabled="!currentOperationTarget"
                @click="buyProperty"
            />
          </div>
          <div class="row">
            <UInput color="primary"
                    variant="outline"
                    label="Аукцион"
                    class="ml-30 w-30"
                    :disabled="!currentOperationTarget"
                    v-model="operations.inputAmount">
              <template #leading>
                <span class="text-gray-500 dark:text-gray-400 text-xs">$</span>
              </template>
            </UInput>
            <UButton
                class="w-30"
                color="cyan"
                variant="soft"
                label="Аукцион"
                :disabled="!currentOperationTarget"
                @click="buyPropertyByAuction"
            />
          </div>
        </div>

        <!-- Operation: upgrade -->
        <div class="row" v-if="operations.current?.id === 'upgrade'">
          <USelect v-model="operations.targetId" :options="availablePlayerUpgrades" />
          <div v-if="nextUpgrade.level > 0">Next level: {{nextUpgrade.level}}</div>
          <UInput color="primary"
                  variant="outline"
                  :model-value="nextUpgrade.price"
                  disabled>
            <template #leading>
              <span class="text-gray-500 dark:text-gray-400 text-xs">$</span>
            </template>
          </UInput>
          <UButton
              color="primary"
              label="Upgrade"
              :disabled="!currentOperationTarget"
              @click="upgradeProperty"
          />
        </div>

        <!-- Operation: rent/tax -->
        <div class="row" v-if="['outcome'].includes(operations.current?.id ?? '')">
          <div>Рента</div>
          <UInput color="primary"
                  variant="outline"
                  v-model="operations.inputAmount">
            <template #leading>
              <span class="text-gray-500 dark:text-gray-400 text-xs">$</span>
            </template>
          </UInput>
          <UButton
              color="primary"
              label="Заплатить"
              @click="payRent"
          />
        </div>

        <!-- Operation: income -->
        <div class="row" v-if="['income'].includes(operations.current?.id ?? '')">
          <div class="row">
            <UButton
                color="primary"
                label="Премия за круг"
                @click="getRoundIncome"
            />
          </div>
          <div class="row">
            <div>Сумма</div>
            <UInput color="primary"
                    variant="outline"
                    v-model="operations.inputAmount">
              <template #leading>
                <span class="text-gray-500 dark:text-gray-400 text-xs">$</span>
              </template>
            </UInput>
            <UButton
                color="primary"
                label="Получить"
                @click="getIncome"
            />
          </div>
          <div class="flex-break"></div>

        </div>


        <!-- Player properties -->
        <div class="row mt-10" v-if="player.properties.length > 0">
          <h5 class="label">Собственность</h5>
        </div>
        <div class="grid" v-if=" player.properties.length > 0">
          <div class="grid-cell" v-for="item in player.properties">
            <div class="title" :class="[item.property.groupColor]">{{item.property.id}}</div>
            <div class="subtitle">Цена: {{item.currentUpgrade.price}}</div>
            <div class="subtitle" v-if="item.property.type === 'city'">Рента: {{item.currentUpgrade.tax}}</div>
            <div class="subtitle" v-if="item.property.type === 'city'">
              Level:
              <UIcon v-for="(n, i) in item.currentUpgrade.level" name="i-heroicons-arrow-uturn-up-20-solid"></UIcon>
            </div>
            <div class="prop-row">
              <!-- UButton
                  icon="i-heroicons-arrow-uturn-left-16-solid"
                  size="sm"
                  color="amber"
                  square
                  variant="outline"
                  @click="confirmSell(item)"
              / -->
              <UButton
                  class="prop-btn"
                  icon="i-heroicons-plus-circle-20-solid"
                  size="sm"
                  color="cyan"
                  label="Получить ренту"
                  variant="outline"
                  @click="clickGetRent(item)"
              />
              <UButton
                  v-if="item.currentUpgrade.level < item.property.upgrades.length-1"
                  class="prop-btn"
                  icon="i-heroicons-arrow-up-on-square"
                  size="sm"
                  color="cyan"
                  label="Upgrade"
                  variant="outline"
                  @click="clickUpgrade(item)"
              />
              <!-- UButton
                  class="prop-btn"
                  icon="i-heroicons-arrow-right-circle-16-solid"
                  size="sm"
                  color="cyan"
                  label="Вернуть залог"
                  variant="outline"
              / -->
              <UButton
                  class="prop-btn"
                  icon="i-heroicons-arrow-left-circle-16-solid"
                  size="sm"
                  color="cyan"
                  label="Заложить"
                  variant="outline"
                  @click="confirmPawn(item)"
              />
            </div>
          </div>
        </div>

      </UContainer>
    </main>
  </ClientOnly>
</template>

<style scoped lang="scss">

.alert {
  background-color: rgba(201, 0, 0, 0.49);
  box-sizing: border-box;
  border: 1px solid var(--data-color-white);
}
.text-white {
  color: var(--data-color-white);
}
.monopoly-layout {
  h5 {
    color: var(--data-color-primary);
  }
  .row {
    display: flex;
    width: 100%;
    margin-bottom: 1vh;
    justify-content: space-between;
    align-items: baseline;
    gap: 2px;
    flex-wrap: wrap;
    .w-30 {
      width:30%;
    }
    .ml-30 {
      margin-left: 35%;
    }
  }
  .flex-break {
    flex-basis: 100%;
    height: 0;
  }
  .icon-h100 {
    height: 100px;
    width: 100px;
  }
  .btn-shrink {
    flex-grow: 1;
    box-sizing: border-box;
    flex-shrink: 1;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3px;
    .grid-cell {
      background-color: #4B4B4BD8;
      border-radius: 5px;
      font-weight: normal;
      display: flex;
      flex-flow: column;
      padding: 5px;
      .title {
        padding: 5px;
        color: #fff;
        background-color: #202020;
        &.green {
          background-color: #002f00;
        }
        &.blue {
          background-color: #001596;
        }
        &.red {
          background-color: #960000;
        }
        &.pink {
          background-color: #850056;
        }
        &.light-blue {
          background-color: #3050fd;
        }
        &.yellow {
          background-color: #7a6a00;
        }
        &.orange {
          background-color: #fd7f30;
        }
        &.brown {
          background-color: #501c00;
        }
      }
      .subtitle {
        padding: 5px;
        font-size: 12px;
        margin-top: 4px;
      }
      .prop-row {
        padding-top: 10px;
        display: flex;
        margin-top: auto;
        flex-wrap: wrap;
        gap: 3px;
        .prop-btn {

        }
      }
    }
  }
}
</style>