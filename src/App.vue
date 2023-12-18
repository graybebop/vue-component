<template>
  <div class="container-xxl">
    <div class="row">
      <div class="col-lg-12 py-5">
        <div class="pb-3" v-if="$route.meta.prev">
          <button @click="goList" class="btn btn-dark">이전 페이지로 가기</button>
        </div>
        <div class="tit-box">
          <h1 class="tit">{{ $route.meta.title }}</h1>
          <p class="txt">{{ $route.meta.description }}</p>
        </div>

        <div class="pt-5"><router-view /></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "./router";
// function goPrevPage() {
//   router.go(-1);
// }

function goList() {
  router.push({ path: "/works" });
}
</script>
