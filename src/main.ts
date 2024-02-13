import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createApp } from "vue";

import router from "@root/router";
import { i18n, vuetify } from '@root/config';

import App from "./App.vue";
import "./style.scss";

const app = createApp(App);

app.use(i18n);
app.use(vuetify);
app.use(router);
app.mount("#app");
