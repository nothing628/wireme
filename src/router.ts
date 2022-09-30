import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("./pages/ChatListPage.vue"),
  },
  {
    path: "/chat/:chat_id",
    component: () => import('./pages/MessagePage.vue'),
  },
  {
    path: "/status",
    component: () => import('./pages/status/StatusListPage.vue'),
  },
  {
    path: "/status/new",
    component: () => import('./pages/status/StatusCreatePage.vue'),
  },
  {
    path: "/status/view/:status_id",
    component: () => import('./pages/status/StatusViewPage.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
