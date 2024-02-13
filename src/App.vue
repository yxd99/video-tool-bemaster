<template>
  <v-layout class="home-view">
    <MenuNavigation />
    <content />
  </v-layout>
</template>

<script lang="ts" setup>
import { MenuNavigation, Content } from "@views/.";
</script>

<style lang="scss" scoped>
@import "styles/colors";

.home-view {
  background-color: #f4f4f4;
  display: flex;
  gap: 1rem;
  height: 100%;

  @media screen and (min-width: 1024px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 5fr;
  }
}
</style>
