<template>
  <v-card flat class='flex-card'>
    <v-container class="header-place">
      <v-container class="header-buttons">
        <TextButton
          icon="mdi-folder-outline"
          flat
          color="#f4f4f4"
          :text="$t('general.newFolder')"
        />
        <TextButton
          color="primary"
          flat
          icon="mdi-play-circle-outline"
          :text="$t('general.newVideo')"
        />
      </v-container>
      <v-tabs slider-color="primary" v-model="viewOption">
        <v-tab
          class="outline-off"
          v-for="(place, i) in tabs"
          :key="i"
          :value="place.text"
        >
          <v-icon start>
            {{ place.icon }}
          </v-icon>
          {{ place.text }}
        </v-tab>
      </v-tabs>
    </v-container>
    <datatable
      height="100dvh"
      :headers="headers"
      :data="foldersData"
      :placeholder="placeholder"
    />
  </v-card>
</template>

<script setup lang="ts">
import { Datatable, TextButton } from '@components/index';
import { foldersData } from '@common/data/index';
import { useI18n } from 'vue-i18n';

const { t } = useI18n({});

const tabs = [
  { text: t('videos.tabs.library'), icon: 'mdi-bookshelf' },
  { text: t('videos.tabs.trash'), icon: 'mdi-trash-can-outline' },
];

const viewOption = t('videos.tabs.library');
const headers = [
  {
    title: t('videos.folderDatatable.name'),
    align: 'start',
    key: 'name',
  },
  {
    title: t('videos.folderDatatable.videos'),
    align: 'end',
    key: 'videos',
  },
  {
    title: t('videos.folderDatatable.size'),
    align: 'end',
    key: 'size',
  },
  {
    title: t('videos.folderDatatable.dateModified'),
    align: 'end',
    key: 'dateModified',
  },
];

const placeholder = t('general.searchVideo');
</script>
<style lang="scss" scoped>
.header-place {
  display: block;
  padding: 0;
  @media screen and (min-width: 960px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
}

.header-buttons {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media screen and (min-width: 960px) {
    flex-direction: row;
    justify-content: flex-end;
    flex: 1;
  }
}

.outline-off {
  outline: none;
}

.flex-card {
  display: flex;
  flex-direction: column;
}
</style>
