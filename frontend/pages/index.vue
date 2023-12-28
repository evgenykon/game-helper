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
