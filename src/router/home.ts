import { RouteRecordRaw } from "vue-router";

export const homeRoute: RouteRecordRaw = {
  path: "/",
  name: "home",
  redirect: '/videos',
};
