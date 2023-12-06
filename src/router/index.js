import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/form",
    name: "form",
    component: () => import(/* webpackChunkName: "FormSample" */ "@/views/FormSample.vue"),
  },
  {
    path: "/swiper",
    name: "swiper",
    component: () => import(/* webpackChunkName: "SwiperPage" */ "@/views/SwiperPage.vue"),
  },
  {
    path: "/button",
    name: "button",
    component: () => import(/* webpackChunkName: "SwiperPage" */ "@/views/ButtonSample.vue"),
  },
  {
    path: "/card",
    name: "card",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/SamplePage.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/ListItem.vue"),
  },
  {
    path: "/view",
    name: "view",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/ViewSample.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
