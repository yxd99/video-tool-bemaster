<template>
  <v-card class="content">
    <router-view />
  </v-card>
</template>

<style scoped lang="scss">
.content {
  width: 100%;
  height: 92%;
  padding: 1rem;
  display: grid;
  grid-template: 1fr / 1fr;
  
  @media screen and (min-width: 920px) {
    height: 100%;
  }
}
</style>
