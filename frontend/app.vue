<template>
  <div class="bg-dark">
    <header>
      Game Helper
    </header>
    <div class="tabs-container">
      <UTabs :items="tabs" :default-index="pageIndex()" @change="changeTab" />
    </div>
    <router-view />
    <UNotifications  />
  </div>
</template>

<script setup lang="ts">
const router = useRouter()

const tabs = [{label:'Home', path:'/'}, {label:'Monopoly', path:'monopoly'}];

function changeTab(index:number) {
  router.push(tabs[index].path);
}

function pageIndex() {
  const pages = {
    "/": 0,
    "/monopoly": 1
  };
  return pages[this.router?.currentRoute?.value?.path ?? 0];
}
</script>

<style lang="scss">
$bg-dark: #101010;
:root{
  --data-color-primary: #ffcc00;
  --data-color-secondary: rgba(75, 75, 75, 0.85);
  --data-color-danger: rgba(201, 0, 0, 0.49);
  --data-color-white: rgb(255, 255, 255);
}
body {
  background-color: $bg-dark;
}
.bg-dark {
  background-color: $bg-dark;
}

header {
  font-size: 20px;
  padding: 5px 15px;
  display: flex;
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  color: var(--data-color-primary);
}
.tabs-container {
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
}
</style>