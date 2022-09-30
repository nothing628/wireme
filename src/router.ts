import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("./pages/ChatListPage.vue"),
  },
  {
    path: "/chat/:chat_id",
    component: () => import('./pages/MessagePage.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
