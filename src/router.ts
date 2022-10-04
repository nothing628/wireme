import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("./pages/SplashLoadingPage.vue"),
  },
  {
    path: "/getting-started",
    name: "getting-started",
    component: () => import("./pages/auth/WelcomePage.vue"),
  },
  {
    path: "/login",
    component: () => import("./pages/auth/LoginPage.vue"),
    children: [
      {
        path: "",
        name: "login",
        component: () => import("./pages/auth/login/ChooseLoginMethod.vue"),
      },
      {
        path: "phone",
        name: "login.phone",
        component: () => import("./pages/auth/login/PhoneMethod.vue"),
      },
      {
        path: "verify",
        name: "login.verify",
        component: () => import("./pages/auth/login/OtpVerifyPage.vue"),
      },
    ],
  },
  {
    path: "/register",
    component: () => import("./pages/auth/RegisterPage.vue"),
    children: [
      {
        path: "/profile",
        component: () => import("./pages/auth/register/ProfilePage.vue"),
      },
      {
        path: "/setup-pin",
        component: () => import("./pages/auth/register/AddPinPage.vue"),
      },
      {
        path: "/setup-fingerprint",
        component: () => import("./pages/auth/register/AddFingerprintPage.vue"),
      },
    ],
  },
  {
    path: "/chats",
    name: 'chat.list',
    component: () => import("./pages/ChatListPage.vue"),
  },
  {
    path: "/chat/:chat_id",
    component: () => import("./pages/MessagePage.vue"),
  },
  {
    path: "/status",
    component: () => import("./pages/status/StatusListPage.vue"),
  },
  {
    path: "/status/new",
    component: () => import("./pages/status/StatusCreatePage.vue"),
  },
  {
    path: "/status/view/:status_id",
    component: () => import("./pages/status/StatusViewPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
