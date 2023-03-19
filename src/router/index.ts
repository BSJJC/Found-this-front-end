import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/test",
      name: "Test",
      component: () => import("@/views/Test.vue"),
    },
  ],
});

export default router;
