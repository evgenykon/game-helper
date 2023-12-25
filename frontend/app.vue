<template>
  <div>
    <header>
      <div>Game Helper</div>
    </header>
    <div class="tabs-container">
      <UTabs :items="tabs" @change="changeTab" />
    </div>
    <router-view />
    <UNotifications  />
  </div>
</template>

<script setup lang="ts">
const router = useRouter()

const tabs = [{label:'Home', path:'/'},{label:'Monopoly', path:'monopoly'}];

function changeTab(index:number) {
  router.push(tabs[index].path);
}
</script>