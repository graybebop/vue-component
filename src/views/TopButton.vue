<template>
  <div class="content-wrap" style="border: 1px solid #000; height: 2000px; width: 100%">TOP</div>
  <div class="box" :class="{ show: !isHidden }" ref="boxEl">TOP</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

let isHidden = ref(true);
let lastScrollTop = 0;
let boxEl = ref(null);

const onScroll = () => {
  let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollTop > lastScrollTop) {
    // 스크롤 다운
    isHidden.value = false;
  } else {
    // 스크롤 업
    isHidden.value = true;
  }
  lastScrollTop = currentScrollTop;
};

const onTransitionEnd = (e) => {
  if (e.propertyName === "bottom") {
    console.log("bottom transition ended");
  }
};

onMounted(() => {
  window.addEventListener("scroll", onScroll);
  boxEl.value.addEventListener("transitionend", onTransitionEnd);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  boxEl.value.removeEventListener("transitionend", onTransitionEnd);
});
</script>

<style scoped lang="scss">
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  position: fixed;
  bottom: -100%;
  right: 20px;
  transition: all 0.7s cubic-bezier(0.17, 0.67, 0.12, 0.94);
  //transform: translateY(100%);
  &.show {
    //transform: translateY(0);
    bottom: 50px !important;
    // transition: all 0.7s cubic-bezier(0.78, 0.34, 0.89, 0.36);
  }
}
</style>
