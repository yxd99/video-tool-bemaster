<template>
  <v-bottom-navigation mode='grow' class="bottom-nav" color="primary">
    <v-btn variant="flat" v-for="option in menuItems" :to="option.value">
      <v-icon>{{ option.icon }}</v-icon>

      <span>{{ option.text }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>
<script lang="ts" setup>
import { MenuProps } from '@shared/types/index';

defineProps<{
  menuItems: MenuProps[];
}>();
</script>

<style lang="scss" scoped>
.bottom-nav {
  position: absolute !important;
  left: 0 !important;
  width: 100% !important;
}
</style>
