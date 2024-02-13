<template>
  <section class="datatable-container">
    <div class="search">
      <v-text-field
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        density="compact"
        single-line
        flat
        hide-details
        variant="solo-filled"
        :label="placeholder"
      />
    </div>
    <div class="content">
      <v-data-table-virtual
        class="flex-table"
        density="comfortable"
        color="#ffffff"
        :search="search"
        v-model="selected"
        :headers="refHeaders"
        :items="data"
        show-select
        fixed-header
        :hide-default-footer="true"
        item-value="id"
      >
        <template v-slot:item.name="{ item }">
          <v-btn
            variant="plain"
            class="no-color-hover"
            :prepend-icon="item.icon ?? 'mdi-folder-outline'"
            :to="item.url ?? '#'"
          >
            <template v-slot:prepend>
              <v-icon color="primary" class="mr-1">{{ item.icon }}</v-icon>
            </template>
            {{ item.name }}</v-btn
          >
        </template>
      </v-data-table-virtual>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const { headers, data, placeholder } = defineProps<{
  headers: any[];
  data: any[];
  placeholder?: string;
}>();
const refHeaders = ref([...headers] as const);
const search = ref('');
const selected = ref([]);
</script>

<style lang="scss" scoped>
.search {
  margin: 2rem 0;
  @media screen and (min-width: 960px) {
    max-width: 40%;
  }
}

.no-color-hover:hover {
  color: inherit;
}

.datatable-container {
  display: grid;  
  grid-template: .5fr 7fr / 1fr;
  height: 100%;
}

.content {
  overflow-y: hidden;
  max-height: 100%;
}

.container {
  max-height: 100%;
}

.flex-table {
  height: 90%;
  display: flex;
  overflow: hidden;
}
</style>
