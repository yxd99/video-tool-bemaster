import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { homeRoute } from "./home";
import { videosRoute } from "./videos";

const routes: Array<RouteRecordRaw> = [homeRoute, videosRoute];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
