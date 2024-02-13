<template>
  <v-card flat class='flex-card'>
    <div class="actions">
      <IconButton
        @click="$router.go(-1)"
        icon="mdi-arrow-left"
        color="primary"
        rounded="lg"
        density="comfortable"
      ></IconButton>
      <v-breadcrumbs
        class="custom-breadcrumbs"
        :items="breadcrumbs"
      ></v-breadcrumbs>
    </div>
    <datatable
      :headers="headers"
      :data="videosData"
      :placeholder="$t('general.searchVideo')"
    />
  </v-card>
</template>

<script lang="ts" setup>
import { IconButton, Datatable } from '@components/index';
import { videosData, foldersData } from '@common/data/index';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { reactive } from 'vue';

const { t } = useI18n();

const breadcrumbs = reactive(['Home']);
const headers = [
  {
    title: t('videos.videoDatatable.name'),
    align: 'start',
    key: 'name',
  },
  {
    title: t('videos.videoDatatable.size'),
    align: 'end',
    key: 'size',
  },
  {
    title: t('videos.videoDatatable.duration'),
    align: 'end',
    key: 'duration',
  },
  {
    title: t('videos.videoDatatable.dateModified'),
    align: 'end',
    key: 'dateModified',
  },
];

const route = useRoute();

onMounted(async () => {
  const folderId = Number(route.params.folderId);
  breadcrumbs.push(foldersData[folderId].name);
});
</script>
<style lang="scss" scoped>
.actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.back-button {
  padding: 0;
  height: fit-content;
}

.flex-card {
  display: flex;
  flex-direction: column;
  flex-flow: 1;
}
</style>
