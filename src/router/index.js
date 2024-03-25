import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/WorksList.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/FormSample",
    name: "FormSample",
    component: () => import(/* webpackChunkName: "FormSample" */ "@/views/FormSample.vue"),
    meta: {
      title: "폼",
      description: "폼에 대한 설명을 포함합니다.",
      prev: true,
    },
  },
  {
    path: "/SwiperPage",
    name: "SwiperPage",
    component: () => import(/* webpackChunkName: "SwiperPage" */ "@/views/SwiperPage.vue"),
    meta: {
      title: "스와이퍼",
      description: "스와이퍼",
      prev: true,
    },
  },
  {
    path: "/ButtonSample",
    name: "ButtonSample",
    component: () => import(/* webpackChunkName: "SwiperPage" */ "@/views/ButtonSample.vue"),
    meta: {
      title: "버튼",
      description: "버튼 설명",
      prev: true,
    },
  },
  {
    path: "/CardSample",
    name: "CardSample",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/CardSample.vue"),
    meta: {
      title: "카드샘플(카드 유형별 타입, 변수 정의)",
      description: "카드",
      prev: true,
    },
  },
  {
    path: "/ListItem",
    name: "ListItem",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/ListItem.vue"),
    meta: {
      title: "클래스명 정의",
      description: "클래스명 정의",
      prev: true,
    },
  },
  {
    path: "/ViewSample",
    name: "ViewSample",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/ViewSample.vue"),
    meta: {
      title: "sticky 테스트",
      description: "sticky 테스트",
      prev: true,
    },
  },
  {
    path: "/TabMenu",
    name: "TabMenu",
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
    path: "/SvgSample",
    name: "SvgSample",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/SvgSample.vue"),
    meta: {
      title: "svg",
      description: "svg",
      prev: true,
    },
  },
  {
    path: "/FlexSample",
    name: "FlexSample",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/FlexSample.vue"),
    meta: {
      title: "flex",
      description: "flex",
      prev: true,
    },
  },
  {
    path: "/DropDown",
    name: "DropDown",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/DropDown.vue"),
    meta: {
      title: "드롭다운",
      description: "드롭다운",
      prev: true,
    },
  },
  {
    path: "/ModalSample",
    name: "ModalSample",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/ModalSample.vue"),
    meta: {
      title: "모달",
      description: "모달",
      prev: true,
    },
  },
  {
    path: "/EstimatePage",
    name: "EstimatePage",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/EstimatePage.vue"),
    meta: {
      title: "일정표",
      description: "일정표",
      prev: true,
    },
  },
  {
    path: "/ToggleSample",
    name: "ToggleSample",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/ToggleSample.vue"),
    meta: {
      title: "토글테스트",
      description: "토글이 여러개 있는경우 하나로 관리",
      prev: true,
    },
  },
  {
    path: "/TopButton",
    name: "TopButton",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/TopButton.vue"),
    meta: {
      title: "TOP 버튼",
      description: "TOP 버튼",
      prev: false,
    },
  },
  {
    path: "/ToggleSlideDownUp",
    name: "ToggleSlideDownUp",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/ToggleSlideDownUp"),
    meta: {
      title: "슬라이드 업 다운",
      description: "슬라이드 업 다운",
      prev: true,
    },
  },
  {
    path: "/ToggleFade",
    name: "ToggleFade",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/ToggleFade"),
    meta: {
      title: "페이드",
      description: "페이드",
      prev: true,
    },
  },
  {
    path: "/FlexExample",
    name: "FlexExample",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/FlexExample"),
    meta: {
      title: "플렉스",
      description: "플렉스",
      prev: true,
    },
  },
  {
    path: "/LayoutPage",
    name: "LayoutPage",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/LayoutPage"),
    meta: {
      title: "",
      description: "",
      prev: false,
    },
  },

  {
    path: "/StickyMenu",
    name: "StickyMenu",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/StickyMenu"),
    meta: {
      title: "",
      description: "",
      prev: false,
    },
  },
  {
    path: "/LayoutConcept",
    name: "LayoutConcept",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/LayoutConcept"),
    meta: {
      title: "현재 레이아웃 컨셉",
      description: "각 부분별 페이지에 쓰이는",
      prev: false,
    },
  },
  {
    path: "/HtmlTags",
    name: "HtmlTags",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/HtmlTags"),
    meta: {
      title: "HTML 태그",
      description: "HTML 태그",
      prev: false,
    },
  },

  {
    path: "/BasicLayout",
    name: "BasicLayout",
    component: () => import(/* webpackChunkName: "SamplePage" */ "@/views/BasicLayout"),
    meta: {
      title: "BasicLayout",
      description: "BasicLayout",
      prev: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
