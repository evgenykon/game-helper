<template>
  <ClientOnly>
    <main>
      <UContainer>
        Choose a game
      </UContainer>
    </main>
  </ClientOnly>
</template>

<script setup lang="ts">
const tabs = [{label:'Monopoly'}];
const toast = useToast()
function changeTab(index:number) {

}
</script>

<style lang="scss">
:root{
  --data-color-primary: #ffcc00;
  --data-color-secondary: rgba(75, 75, 75, 0.85);
  --data-color-danger: rgba(201, 0, 0, 0.49);
  --data-color-white: rgb(255, 255, 255);
}
header {
  display: flex;
  height: 8vw;
  line-height: 6vw;
  font-size: 6vw;
  box-sizing: border-box;
  padding: 1vw;
  color: var(--data-color-primary);
}
.tabs-container {
  box-sizing: border-box;
  width: 100%;
  padding: 1vw;
}
</style>