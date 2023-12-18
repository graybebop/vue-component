import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/WorksList.vue";

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
    meta: {
      title: "폼",
      description: "폼에 대한 설명을 포함합니다.",
      prev: true,
    },
  },
  {
    path: "/swiper",
    name: "swiper",
    component: () => import(/* webpackChunkName: "SwiperPage" */ "@/views/SwiperPage.vue"),
    meta: {
      title: "홈 페이지",
      description: "홈 페이지에 대한 설명입니다.",
      prev: true,
    },
  },
  {
    path: "/button",
    name: "button",
    component: () => import(/* webpackChunkName: "SwiperPage" */ "@/views/ButtonSample.vue"),
    meta: {
      title: "버튼",
      description: "버튼 설명",
      prev: true,
    },
  },
  {
    path: "/card",
    name: "card",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/SamplePage.vue"),
    meta: {
      title: "홈 페이지",
      description: "홈 페이지에 대한 설명입니다.",
      prev: true,
    },
  },
  {
    path: "/list",
    name: "list",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/ListItem.vue"),
    meta: {
      title: "홈 페이지",
      description: "홈 페이지에 대한 설명입니다.",
      prev: true,
    },
  },
  {
    path: "/view",
    name: "view",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/ViewSample.vue"),
    meta: {
      title: "홈 페이지",
      description: "홈 페이지에 대한 설명입니다.",
      prev: true,
    },
  },
  {
    path: "/tabs",
    name: "tabs",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/TabMenu.vue"),
    meta: {
      title: "홈 페이지",
      description: "홈 페이지에 대한 설명입니다.",
      prev: true,
    },
  },
  {
    path: "/works",
    name: "works",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/WorksList.vue"),
    meta: {
      title: "콤포넌트 리스트",
      description: "콤포넌트 리스트",
      prev: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
