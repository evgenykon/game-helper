import { _ as __nuxt_component_0 } from './client-only-47753772.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';
import '@vueuse/core';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const schemes = [
  {
    id: "classic",
    name: "Classic"
  },
  {
    id: "russian-cities-v2",
    name: "Russian Cities v2",
    startBalance: 1500,
    operations: [
      {
        id: "buy",
        name: "\u041A\u0443\u043F\u0438\u0442\u044C \u0433\u043E\u0440\u043E\u0434"
      },
      {
        id: "upgrade",
        name: "Upgrade \u0433\u043E\u0440\u043E\u0434\u0430"
      },
      {
        id: "outcome",
        name: "\u041E\u043F\u043B\u0430\u0442\u044B"
      },
      {
        id: "income",
        name: "\u0412\u044B\u043F\u043B\u0430\u0442\u044B"
      }
    ],
    fieldTypes: [
      "city",
      "railroad",
      "infra",
      "prison",
      "start",
      "chance",
      "bank",
      "tax",
      "parking"
    ],
    fields: [
      { type: "start" },
      { type: "city", id: "\u0422\u044E\u043C\u0435\u043D\u044C" },
      { type: "bank" },
      { type: "city", id: "\u0421\u0430\u043C\u0430\u0440\u0430" },
      { type: "tax", amount: -200 },
      { type: "railroad", id: "\u0420\u0438\u0436\u0441\u043A\u0430\u044F \u0436\u0435\u043B\u0435\u0437\u043D\u0430\u044F \u0434\u043E\u0440\u043E\u0433\u0430" },
      { type: "city", id: "\u041A\u0430\u043B\u0443\u0433\u0430" },
      { type: "chance" },
      { type: "city", id: "\u041F\u0435\u0440\u043C\u044C" },
      { type: "city", id: "\u0422\u043E\u043C\u0441\u043A" },
      { type: "prison", amount: -50 },
      { type: "city", id: "\u0423\u0444\u0430" },
      { type: "infra", id: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u044F" },
      { type: "city", id: "\u041A\u0430\u0437\u0430\u043D\u044C" },
      { type: "city", id: "\u041A\u0440\u0430\u0441\u043D\u043E\u0434\u0430\u0440" },
      { type: "railroad", id: "\u041A\u0443\u0440\u0441\u043A\u0430\u044F \u0436\u0435\u043B\u0435\u0437\u043D\u0430\u044F \u0434\u043E\u0440\u043E\u0433\u0430" },
      { type: "city", id: "\u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B\u044C\u0441\u043A" },
      { type: "bank" },
      { type: "city", id: "\u0427\u0435\u043B\u044F\u0431\u0438\u043D\u0441\u043A" },
      { type: "city", id: "\u041D\u0438\u0436\u043D\u0438\u0439 \u041D\u043E\u0432\u0433\u043E\u0440\u043E\u0434" },
      { type: "parking" },
      { type: "city", id: "\u041E\u043C\u0441\u043A" },
      { type: "chance" },
      { type: "city", id: "\u0412\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434" },
      { type: "city", id: "\u0411\u0435\u043B\u0433\u043E\u0440\u043E\u0434" },
      { type: "railroad", id: "\u041A\u0430\u0437\u0430\u043D\u0441\u043A\u0430\u044F \u0436\u0435\u043B\u0435\u0437\u043D\u0430\u044F \u0434\u043E\u0440\u043E\u0433\u0430" },
      { type: "city", id: "\u0421\u0442\u0430\u0432\u0440\u043E\u043F\u043E\u043B\u044C" },
      { type: "city", id: "\u0420\u043E\u0441\u0442\u043E\u0432-\u043D\u0430-\u0414\u043E\u043D\u0443" },
      { type: "infra", id: "\u0412\u043E\u0434\u043E\u043F\u0440\u043E\u0432\u043E\u0434" },
      { type: "city", id: "\u0425\u0430\u0431\u0430\u0440\u043E\u0432\u0441\u043A" },
      { type: "prison", amount: -50 },
      { type: "city", id: "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433" },
      { type: "city", id: "\u0412\u043B\u0430\u0434\u0438\u0432\u043E\u0441\u0442\u043E\u043A" },
      { type: "bank" },
      { type: "city", id: "\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0440\u0442\u0435\u0440\u0431\u0443\u0440\u0433" },
      { type: "railroad", id: "\u041B\u0435\u043D\u0438\u043D\u0433\u0440\u0430\u0434\u0441\u043A\u0430\u044F \u0436\u0435\u043B\u0435\u0437\u043D\u0430\u044F \u0434\u043E\u0440\u043E\u0433\u0430" },
      { type: "chance" },
      { type: "city", id: "\u041C\u043E\u0441\u043A\u0432\u0430" },
      { type: "tax", amount: -100 },
      { type: "city", id: "\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A" }
    ],
    currencyTypes: [
      5,
      10,
      50,
      100,
      500,
      1e3,
      5e3
    ],
    roundIncomeAmount: 200,
    properties: [
      {
        id: "\u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B\u044C\u0441\u043A",
        groupColor: "orange",
        type: "city",
        upgrades: [
          { price: 180, tax: 14, level: 0 },
          { price: 100, tax: 70, level: 1 },
          { price: 100, tax: 200, level: 2 },
          { price: 100, tax: 550, level: 3 },
          { price: 100, tax: 750, level: 4 },
          { price: 100, tax: 950, level: 5 }
        ]
      },
      {
        id: "\u0411\u0435\u043B\u0433\u043E\u0440\u043E\u0434",
        groupColor: "red",
        type: "city",
        upgrades: [
          { price: 240, tax: 18, level: 0 },
          { price: 150, tax: 90, level: 1 },
          { price: 150, tax: 250, level: 2 },
          { price: 150, tax: 700, level: 3 },
          { price: 150, tax: 875, level: 4 },
          { price: 150, tax: 1050, level: 5 }
        ]
      },
      {
        id: "\u0412\u043B\u0430\u0434\u0438\u0432\u043E\u0441\u0442\u043E\u043A",
        groupColor: "green",
        type: "city",
        upgrades: [
          { price: 300, tax: 26, level: 0 },
          { price: 200, tax: 130, level: 1 },
          { price: 200, tax: 390, level: 2 },
          { price: 200, tax: 900, level: 3 },
          { price: 200, tax: 1100, level: 4 },
          { price: 200, tax: 1275, level: 5 }
        ]
      },
      { id: "\u0412\u043E\u0434\u043E\u043F\u0440\u043E\u0432\u043E\u0434", type: "infra", upgrades: [
        { price: 150, tax: 0, level: 1 }
      ] },
      {
        id: "\u0412\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434",
        groupColor: "red",
        type: "city",
        upgrades: [
          { price: 220, tax: 18, level: 0 },
          { price: 150, tax: 90, level: 1 },
          { price: 150, tax: 250, level: 2 },
          { price: 150, tax: 700, level: 3 },
          { price: 150, tax: 875, level: 4 },
          { price: 150, tax: 1050, level: 5 }
        ]
      },
      {
        id: "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433",
        groupColor: "green",
        type: "city",
        upgrades: [
          { price: 300, tax: 26, level: 0 },
          { price: 200, tax: 130, level: 1 },
          { price: 200, tax: 390, level: 2 },
          { price: 200, tax: 900, level: 3 },
          { price: 200, tax: 1100, level: 4 },
          { price: 200, tax: 1275, level: 5 }
        ]
      },
      { id: "\u041A\u0430\u0437\u0430\u043D\u0441\u043A\u0430\u044F \u0436\u0435\u043B\u0435\u0437\u043D\u0430\u044F \u0434\u043E\u0440\u043E\u0433\u0430", type: "railroad", upgrades: [
        { price: 200, tax: 0, level: 1 }
      ] },
      {
        id: "\u041A\u0430\u0437\u0430\u043D\u044C",
        groupColor: "pink",
        type: "city",
        upgrades: [
          { price: 140, tax: 10, level: 0 },
          { price: 100, tax: 50, level: 1 },
          { price: 100, tax: 150, level: 2 },
          { price: 100, tax: 450, level: 3 },
          { price: 100, tax: 625, level: 4 },
          { price: 100, tax: 750, level: 5 }
        ]
      },
      {
        id: "\u041A\u0430\u043B\u0443\u0433\u0430",
        groupColor: "light-blue",
        type: "city",
        upgrades: [
          { price: 100, tax: 6, level: 0 },
          { price: 50, tax: 30, level: 1 },
          { price: 50, tax: 90, level: 2 },
          { price: 50, tax: 270, level: 3 },
          { price: 50, tax: 400, level: 4 },
          { price: 50, tax: 550, level: 5 }
        ]
      },
      {
        id: "\u041A\u0440\u0430\u0441\u043D\u043E\u0434\u0430\u0440",
        groupColor: "pink",
        type: "city",
        upgrades: [
          { price: 160, tax: 12, level: 0 },
          { price: 100, tax: 60, level: 1 },
          { price: 100, tax: 180, level: 2 },
          { price: 100, tax: 500, level: 3 },
          { price: 100, tax: 700, level: 4 },
          { price: 100, tax: 900, level: 5 }
        ]
      },
      { id: "\u041A\u0443\u0440\u0441\u043A\u0430\u044F \u0436\u0435\u043B\u0435\u0437\u043D\u0430\u044F \u0434\u043E\u0440\u043E\u0433\u0430", type: "railroad", upgrades: [
        { price: 200, tax: 0, level: 1 }
      ] },
      { id: "\u041B\u0435\u043D\u0438\u043D\u0433\u0440\u0430\u0434\u0441\u043A\u0430\u044F \u0436\u0435\u043B\u0435\u0437\u043D\u0430\u044F \u0434\u043E\u0440\u043E\u0433\u0430", type: "railroad", upgrades: [
        { price: 200, tax: 0, level: 1 }
      ] },
      {
        id: "\u041C\u043E\u0441\u043A\u0432\u0430",
        groupColor: "blue",
        type: "city",
        upgrades: [
          { price: 350, tax: 35, level: 0 },
          { price: 200, tax: 175, level: 1 },
          { price: 200, tax: 500, level: 2 },
          { price: 200, tax: 1100, level: 3 },
          { price: 200, tax: 1300, level: 4 },
          { price: 200, tax: 1500, level: 5 }
        ]
      },
      {
        id: "\u041D\u0438\u0436\u043D\u0438\u0439 \u041D\u043E\u0432\u0433\u043E\u0440\u043E\u0434",
        groupColor: "orange",
        type: "city",
        upgrades: [
          { price: 200, tax: 16, level: 0 },
          { price: 100, tax: 80, level: 1 },
          { price: 100, tax: 220, level: 2 },
          { price: 100, tax: 600, level: 3 },
          { price: 100, tax: 800, level: 4 },
          { price: 100, tax: 1e3, level: 5 }
        ]
      },
      {
        id: "\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A",
        groupColor: "blue",
        type: "city",
        upgrades: [
          { price: 400, tax: 50, level: 0 },
          { price: 200, tax: 200, level: 1 },
          { price: 200, tax: 600, level: 2 },
          { price: 200, tax: 1400, level: 3 },
          { price: 200, tax: 1700, level: 4 },
          { price: 200, tax: 2e3, level: 5 }
        ]
      },
      {
        id: "\u041E\u043C\u0441\u043A",
        groupColor: "red",
        type: "city",
        upgrades: [
          { price: 220, tax: 18, level: 0 },
          { price: 150, tax: 90, level: 1 },
          { price: 150, tax: 250, level: 2 },
          { price: 150, tax: 700, level: 3 },
          { price: 150, tax: 875, level: 4 },
          { price: 150, tax: 1050, level: 5 }
        ]
      },
      {
        id: "\u041F\u0435\u0440\u043C\u044C",
        groupColor: "light-blue",
        type: "city",
        upgrades: [
          { price: 100, tax: 6, level: 0 },
          { price: 50, tax: 30, level: 1 },
          { price: 50, tax: 90, level: 2 },
          { price: 50, tax: 270, level: 3 },
          { price: 50, tax: 400, level: 4 },
          { price: 50, tax: 550, level: 5 }
        ]
      },
      { id: "\u0420\u0438\u0436\u0441\u043A\u0430\u044F \u0436\u0435\u043B\u0435\u0437\u043D\u0430\u044F \u0434\u043E\u0440\u043E\u0433\u0430", type: "railroad", upgrades: [
        { price: 200, tax: 0, level: 0 }
      ] },
      {
        id: "\u0420\u043E\u0441\u0442\u043E\u0432-\u043D\u0430-\u0414\u043E\u043D\u0443",
        groupColor: "yellow",
        type: "city",
        upgrades: [
          { price: 260, tax: 22, level: 0 },
          { price: 150, tax: 110, level: 1 },
          { price: 150, tax: 330, level: 2 },
          { price: 150, tax: 800, level: 3 },
          { price: 150, tax: 975, level: 4 },
          { price: 150, tax: 1150, level: 5 }
        ]
      },
      {
        id: "\u0421\u0430\u043C\u0430\u0440\u0430",
        groupColor: "brown",
        type: "city",
        upgrades: [
          { price: 60, tax: 4, level: 0 },
          { price: 50, tax: 20, level: 1 },
          { price: 50, tax: 60, level: 2 },
          { price: 50, tax: 180, level: 3 },
          { price: 50, tax: 320, level: 4 },
          { price: 50, tax: 450, level: 5 }
        ]
      },
      {
        id: "\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",
        groupColor: "green",
        type: "city",
        upgrades: [
          { price: 320, tax: 28, level: 0 },
          { price: 200, tax: 150, level: 1 },
          { price: 200, tax: 450, level: 2 },
          { price: 200, tax: 1e3, level: 3 },
          { price: 200, tax: 1200, level: 4 },
          { price: 200, tax: 1400, level: 5 }
        ]
      },
      {
        id: "\u0421\u0442\u0430\u0432\u0440\u043E\u043F\u043E\u043B\u044C",
        groupColor: "yellow",
        type: "city",
        upgrades: [
          { price: 260, tax: 22, level: 0 },
          { price: 150, tax: 110, level: 1 },
          { price: 150, tax: 330, level: 2 },
          { price: 150, tax: 800, level: 3 },
          { price: 150, tax: 975, level: 4 },
          { price: 150, tax: 1150, level: 5 }
        ]
      },
      {
        id: "\u0422\u043E\u043C\u0441\u043A",
        groupColor: "light-blue",
        type: "city",
        upgrades: [
          { price: 120, tax: 8, level: 0 },
          { price: 50, tax: 40, level: 1 },
          { price: 50, tax: 100, level: 2 },
          { price: 50, tax: 300, level: 3 },
          { price: 50, tax: 450, level: 4 },
          { price: 50, tax: 600, level: 5 }
        ]
      },
      {
        id: "\u0422\u044E\u043C\u0435\u043D\u044C",
        groupColor: "brown",
        type: "city",
        upgrades: [
          { price: 60, tax: 2, level: 0 },
          { price: 50, tax: 10, level: 1 },
          { price: 50, tax: 30, level: 2 },
          { price: 50, tax: 90, level: 3 },
          { price: 50, tax: 160, level: 4 },
          { price: 50, tax: 250, level: 5 }
        ]
      },
      {
        id: "\u0423\u0444\u0430",
        groupColor: "pink",
        type: "city",
        upgrades: [
          { price: 140, tax: 10, level: 0 },
          { price: 100, tax: 50, level: 1 },
          { price: 100, tax: 150, level: 2 },
          { price: 100, tax: 450, level: 3 },
          { price: 100, tax: 625, level: 4 },
          { price: 100, tax: 750, level: 5 }
        ]
      },
      {
        id: "\u0425\u0430\u0431\u0430\u0440\u043E\u0432\u0441\u043A",
        groupColor: "yellow",
        type: "city",
        upgrades: [
          { price: 280, tax: 24, level: 0 },
          { price: 150, tax: 120, level: 1 },
          { price: 150, tax: 360, level: 2 },
          { price: 150, tax: 850, level: 3 },
          { price: 150, tax: 1025, level: 4 },
          { price: 150, tax: 1200, level: 5 }
        ]
      },
      {
        id: "\u0427\u0435\u043B\u044F\u0431\u0438\u043D\u0441\u043A",
        groupColor: "orange",
        type: "city",
        upgrades: [
          { price: 180, tax: 14, level: 0 },
          { price: 100, tax: 70, level: 1 },
          { price: 100, tax: 200, level: 2 },
          { price: 100, tax: 550, level: 3 },
          { price: 100, tax: 750, level: 4 },
          { price: 100, tax: 950, level: 5 }
        ]
      },
      { id: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u044F", type: "infra", upgrades: [
        { price: 150, tax: 0, level: 0 }
      ] }
    ]
  }
];
const monopolySchemes = schemes;
class Player {
  constructor() {
    __publicField(this, "balance", 0);
    __publicField(this, "properties", []);
  }
  init(balance) {
    this.balance = balance;
    this.properties = [];
  }
}
const _sfc_main = {
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
    };
  },
  mounted() {
    if (localStorage["schemes.currentId"]) {
      this.schemes.currentId = localStorage["schemes.currentId"];
      this.selectScheme();
    }
    if (localStorage["player.balance"]) {
      this.player.balance = localStorage["player.balance"];
    }
    if (localStorage["player.properties"]) {
      this.player.properties = JSON.parse(localStorage["player.properties"]);
    }
  },
  methods: {
    selectScheme() {
      var _a2, _b2;
      var _a, _b;
      this.player.init((_a2 = (_a = this.currentScheme) == null ? void 0 : _a.startBalance) != null ? _a2 : 0);
      this.operations.list = (_b2 = (_b = this.currentScheme) == null ? void 0 : _b.operations.map((item) => item)) != null ? _b2 : [];
    },
    selectOperation(operation) {
      this.operations.current = operation;
    },
    resetTarget() {
      this.operations.targetId = null;
      this.operations.current = null;
      this.operations.inputAmount = 0;
    },
    buyProperty() {
      var _a2;
      var _a, _b;
      try {
        this.decBalance((_a2 = (_a = this.currentOperationTarget) == null ? void 0 : _a.upgrades[0].price) != null ? _a2 : 0);
        this.player.properties.push({
          property: this.currentOperationTarget,
          level: 1,
          currentUpgrade: (_b = this.currentOperationTarget) == null ? void 0 : _b.upgrades.find((item) => item.level === 1)
        });
        this.resetTarget();
        localStorage["player.properties"] = JSON.stringify(this.player.properties);
      } catch (e) {
        console.error(e.message);
      }
    },
    upgradeProperty() {
      var _a;
      try {
        const current = this.currentPlayerTarget;
        if (!current) {
          throw new Error("Unknown property");
        }
        const nextUpgrade = (_a = current.property.upgrades.find((item) => item.level === current.currentUpgrade.level + 1)) != null ? _a : null;
        if (!nextUpgrade) {
          throw new Error("Upgrade impossible");
        }
        this.decBalance(nextUpgrade.price);
        const price = current.currentUpgrade.price;
        const propId = current.property.id;
        this.player.properties.forEach((item) => {
          if (item.property.id !== propId) {
            return item;
          }
          item.currentUpgrade = nextUpgrade;
          item.currentUpgrade.price += price;
          return item;
        });
        this.resetTarget();
        localStorage["player.properties"] = JSON.stringify(this.player.properties);
      } catch (e) {
        console.error(e.message);
      }
    },
    decBalance(value) {
      if (value > this.player.balance) {
        throw new Error("Low balance");
      }
      if (value === 0) {
        throw new Error("Incorrect price");
      }
      this.player.balance = +this.player.balance - +value;
    },
    incBalance(value) {
      this.player.balance = +this.player.balance + +value;
    },
    payRent() {
      try {
        const value = this.operations.inputAmount;
        if (value > this.player.balance) {
          throw new Error("Low balance");
        }
        this.decBalance(value);
        this.resetTarget();
      } catch (e) {
        console.error(e.message);
      }
    },
    getIncome() {
      try {
        const value = this.operations.inputAmount;
        this.incBalance(value);
        this.resetTarget();
      } catch (e) {
        console.error(e.message);
      }
    },
    getRoundIncome() {
      var _a2;
      var _a;
      try {
        const value = (_a2 = (_a = this.currentScheme) == null ? void 0 : _a.roundIncomeAmount) != null ? _a2 : 0;
        this.incBalance(value);
        this.resetTarget();
      } catch (e) {
        console.error(e.message);
      }
    }
  },
  computed: {
    currentScheme() {
      var _a;
      return (_a = this.schemes.list.find((item) => item.id === this.schemes.currentId)) != null ? _a : null;
    },
    availableProperties() {
      var _a;
      return (_a = this.currentScheme) == null ? void 0 : _a.properties.filter((item) => !this.player.properties.map((item2) => item2.property.id).includes(item.id)).map((item) => item.id);
    },
    currentOperationTarget() {
      var _a2;
      var _a;
      return (_a2 = (_a = this.currentScheme) == null ? void 0 : _a.properties.find((item) => item.id === this.operations.targetId)) != null ? _a2 : null;
    },
    availablePlayerUpgrades() {
      function hasNextLevel(property, currentLevel) {
        var _a2;
        var _a;
        return (_a2 = (_a = property.upgrades.find((item) => item.level > currentLevel)) == null ? void 0 : _a.level) != null ? _a2 : false;
      }
      return this.player.properties.filter((item) => hasNextLevel(item.property, item.currentUpgrade.level)).map((item) => item.property.id);
    },
    currentPlayerTarget() {
      var _a;
      return (_a = this.player.properties.find((item) => item.property.id === this.operations.targetId)) != null ? _a : null;
    },
    nextUpgrade() {
      var _a2, _b2;
      var _a, _b;
      const currentLevel = (_a2 = (_a = this.currentPlayerTarget) == null ? void 0 : _a.currentUpgrade.level) != null ? _a2 : 0;
      const defaultUp = { level: 0, tax: 0, price: 0 };
      return (_b2 = (_b = this.currentOperationTarget) == null ? void 0 : _b.upgrades.find((item) => item.level === currentLevel + 1)) != null ? _b2 : defaultUp;
    }
  },
  watch: {
    "schemes.currentId": (value) => {
      localStorage["schemes.currentId"] = value;
    },
    "player.balance": (value) => {
      localStorage["player.balance"] = value;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_0;
  _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/monopoly.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const monopoly = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-81ef6ae8"]]);

export { monopoly as default };
//# sourceMappingURL=monopoly-930cf1fc.mjs.map
