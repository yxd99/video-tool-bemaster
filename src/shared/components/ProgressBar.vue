<template>
  <div class='my-1'>
    <div class='info'>
      <p class='text-left title'>{{ title }}</p>
      <p class='text-right description'>{{ description }}</p>
    </div>
    <v-progress-linear :model-value='value' color='primary'></v-progress-linear>
  </div>
</template>

<script setup lang='ts'>
defineProps<{
  title: string,
  description: string,
  value: number,
}>()

</script>

<style lang='scss' scoped>
.info {
  display: grid;
  grid-template-columns: 1fr auto;
}

.title {
  font-size: 12px !important;
}

.description {
  font-size: 10px !important;
}
</style>