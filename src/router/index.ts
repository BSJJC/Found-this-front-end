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
      path: "/addTopic",
      name: "AddTopic",
      component: () => import("@/views/AddTopic.vue"),
    },
  ],
});

export default router;
