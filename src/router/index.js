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
      title: "스와이퍼",
      description: "스와이퍼",
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
      title: "카드",
      description: "카드",
      prev: true,
    },
  },
  {
    path: "/list",
    name: "list",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/ListItem.vue"),
    meta: {
      title: "클래스명 정의",
      description: "클래스명 정의",
      prev: true,
    },
  },
  {
    path: "/view",
    name: "view",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/ViewSample.vue"),
    meta: {
      title: "sticky 테스트",
      description: "sticky 테스트",
      prev: true,
    },
  },
  {
    path: "/tabs",
    name: "tabs",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/TabMenu.vue"),
    meta: {
      title: "탭메뉴",
      description: "탭메누 스크롤시 활성화",
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
  {
    path: "/svg",
    name: "svg",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/SvgSample.vue"),
    meta: {
      title: "svg",
      description: "svg",
      prev: false,
    },
  },
  {
    path: "/flex",
    name: "flex",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/FlexSample.vue"),
    meta: {
      title: "flex",
      description: "flex",
      prev: false,
    },
  },
  {
    path: "/dropdown",
    name: "dropdown",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/DropDown.vue"),
    meta: {
      title: "드롭다운",
      description: "드롭다운",
      prev: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
