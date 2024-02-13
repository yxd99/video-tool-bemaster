<template>
  <v-navigation-drawer class="side-nav" permanent rounded="lg" :rail="rail">
    <v-list class="text-center">
      <v-btn
        variant="text"
        :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
        @click.stop="rail = !rail"
        class="drawer-btn"
      ></v-btn>
      <v-container>
        <v-avatar
          transition="scale-transition"
          color="grey"
          size="60"
          rounded="lg"
          class="ma-7"
          v-if='!rail'
        >
          <v-img cover alt="avatar" aspect-ratio="2/2" src="https://res.cloudinary.com/dtswimqfo/image/upload/f_auto,q_auto/uxmb7ouoaoukq0hk5pjz"></v-img>
        </v-avatar>
      </v-container>
    </v-list>
    <v-list nav>
      <v-list-item
        v-for="(item, i) in menuItems"
        :key="i"
        :to="item.value"
        class="my-2"
        color="primary"
        variant="flat"
        :disabled="item.disabled"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <MembershipCard v-if="!rail" />
    </template>
  </v-navigation-drawer>
</template>
<script lang="ts" setup>
import { MenuProps } from "@shared/types/index";
import { MembershipCard } from "@components/index";
import { ref } from "vue";

let rail = ref(false);
defineProps<{
  menuItems: MenuProps[];
}>();
</script>

<style lang="scss" scoped>
.side-nav {
  position: relative !important;
  height: 100%;
}

.drawer-btn {
  position: absolute;
  top: 0;
  right: 0;
  outline: none;
}
</style>
