import { createI18n } from 'vue-i18n';

import { messages } from '@common/i18n/index';
const browserLanguage = navigator.language.split('-')[0];
const supportLanguages = Object.keys(messages);
const languageDefault = supportLanguages.includes(browserLanguage) ? browserLanguage : 'en';

export const i18n = createI18n({
  legacy: false,
  locale: languageDefault,
  fallbackLocale: 'es',
  messages,
});
