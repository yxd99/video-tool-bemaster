<template>
  <BottomNav v-if='isSmallScreen' :menu-items="menuItems" />
  <SideNav v-else :menu-items="menuItems" />
</template>

<script lang="ts" setup>
import { SideNav, BottomNav } from '@views/index';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const menuItems = [
  {
    text: t('sidenav.dashboard'),
    icon: 'mdi-view-dashboard-outline',
    value: '/#',
    disabled: true,
  },
  {
    text: t('sidenav.videos'),
    icon: 'mdi-folder-outline',
    value: '/videos',
    disabled: false,
  },
  {
    text: t('sidenav.player'),
    icon: 'mdi-play-circle-outline',
    value: '/#',
    disabled: true,
  },
  {
    text: t('sidenav.analytics'),
    icon: 'mdi-chart-bar',
    value: '/#',
    disabled: true,
  },
  {
    text: t('sidenav.settings'),
    icon: 'mdi-cog-outline',
    value: '/#',
    disabled: true,
  },
];

const isSmallScreen = ref(window.innerWidth < 920);

const handlerResize = () => {
  isSmallScreen.value = window.innerWidth < 920;
};
onMounted(() => {
  addEventListener('resize', handlerResize);
  
});
onBeforeUnmount(() => {
  addEventListener('resize', handlerResize);
});
</script>
