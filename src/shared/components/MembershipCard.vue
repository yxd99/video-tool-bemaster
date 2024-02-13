<template>
  <v-card variant="tonal" class="ma-4 rounded-xl py-3 px-1">
    <v-card-title class="mb-0 pb-0">{{
      $t('sidenav.membership_card.title')
    }}</v-card-title>
    <v-card-subtitle class="font-italic text-caption">{{
      $t('sidenav.membership_card.subtitle')
    }}</v-card-subtitle>
    <v-card-text class="py-2">
      <ProgressBar
        v-for="item in progessBarData"
        :value="calculatePercent(item)"
        :title="item.title"
        :description="generateDescription(item)"
        class="mb-4"
      >
      </ProgressBar>
    </v-card-text>
    <v-card-actions>
      <TextButton
        class='text-caption'
        rounded="xl"
        variant="flat"
        :text="$t('sidenav.membership_card.action_text')"
        color="primary"
      />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import { type ProgressBarProps } from '@shared/types/index';
import { parseSize } from '@common/utils/indext';
import { TextButton, ProgressBar } from '@components/index';
import { UNITS } from '@shared/enums/index';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const progessBarData = [
  {
    title: t('sidenav.membership_card.options.storage'),
    use: { size: 23.5, unit: UNITS.GB },
    maxValue: { size: 1, unit: UNITS.TB },
  },
  {
    title: t('sidenav.membership_card.options.bandwidth'),
    use: { size: 3.5, unit: UNITS.TB },
    maxValue: { size: 5, unit: UNITS.TB },
  },
];
const generateDescription = (item: ProgressBarProps) =>
  `${item.use.size} ${item.use.unit} / ${item.maxValue.size} ${item.maxValue.unit}`;
const calculatePercent = (input: ProgressBarProps) =>
  (parseSize(input.use) / parseSize(input.maxValue)) * 100;
</script>
