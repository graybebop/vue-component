<template>
  <div>
    <div class="main-swiper">
      <swiper :options="mainSwiperOptions" ref="mainSwiper" navigation>
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <img src="slide" alt="Main slide" />
        </swiper-slide>
      </swiper>
    </div>

    <div class="thumbs-swiper">
      <swiper :options="thumbSwiperOptions" @swiper="onSwiper" class="swiper" ref="thumbSwiper">
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <img :src="slide" alt="Thumb slide" />
        </swiper-slide>
      </swiper>
      <div class="gallery-paging-wrap">
        <div class="thumb-nav-next" @click="goNext"></div>
        <div class="thumb-nav-prev" @click="goPrev"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Navigation, Thumbs],
      slides: [
        "https://media.istockphoto.com/id/1139328205/ko/%EC%82%AC%EC%A7%84/%EC%B6%95%EC%A0%9C-%EC%B6%94%EC%83%81%EC%A0%81%EC%9D%B8-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B8%B0%EB%A6%84-%EB%9E%A8%ED%94%84-%EA%B5%BD%EA%B8%B0.jpg?s=2048x2048&w=is&k=20&c=IU_AQVPtDoLANkAmK6hEMQ4Qfd9bQgYPtmZ2BC5QZ_c=",
        "https://media.istockphoto.com/id/1139328205/ko/%EC%82%AC%EC%A7%84/%EC%B6%95%EC%A0%9C-%EC%B6%94%EC%83%81%EC%A0%81%EC%9D%B8-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B8%B0%EB%A6%84-%EB%9E%A8%ED%94%84-%EA%B5%BD%EA%B8%B0.jpg?s=2048x2048&w=is&k=20&c=IU_AQVPtDoLANkAmK6hEMQ4Qfd9bQgYPtmZ2BC5QZ_c=",
        "https://media.istockphoto.com/id/1139328205/ko/%EC%82%AC%EC%A7%84/%EC%B6%95%EC%A0%9C-%EC%B6%94%EC%83%81%EC%A0%81%EC%9D%B8-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B8%B0%EB%A6%84-%EB%9E%A8%ED%94%84-%EA%B5%BD%EA%B8%B0.jpg?s=2048x2048&w=is&k=20&c=IU_AQVPtDoLANkAmK6hEMQ4Qfd9bQgYPtmZ2BC5QZ_c=",
        "https://media.istockphoto.com/id/1139328205/ko/%EC%82%AC%EC%A7%84/%EC%B6%95%EC%A0%9C-%EC%B6%94%EC%83%81%EC%A0%81%EC%9D%B8-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B8%B0%EB%A6%84-%EB%9E%A8%ED%94%84-%EA%B5%BD%EA%B8%B0.jpg?s=2048x2048&w=is&k=20&c=IU_AQVPtDoLANkAmK6hEMQ4Qfd9bQgYPtmZ2BC5QZ_c=",
        "https://media.istockphoto.com/id/1139328205/ko/%EC%82%AC%EC%A7%84/%EC%B6%95%EC%A0%9C-%EC%B6%94%EC%83%81%EC%A0%81%EC%9D%B8-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B8%B0%EB%A6%84-%EB%9E%A8%ED%94%84-%EA%B5%BD%EA%B8%B0.jpg?s=2048x2048&w=is&k=20&c=IU_AQVPtDoLANkAmK6hEMQ4Qfd9bQgYPtmZ2BC5QZ_c=",
        "https://media.istockphoto.com/id/1139328205/ko/%EC%82%AC%EC%A7%84/%EC%B6%95%EC%A0%9C-%EC%B6%94%EC%83%81%EC%A0%81%EC%9D%B8-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B8%B0%EB%A6%84-%EB%9E%A8%ED%94%84-%EA%B5%BD%EA%B8%B0.jpg?s=2048x2048&w=is&k=20&c=IU_AQVPtDoLANkAmK6hEMQ4Qfd9bQgYPtmZ2BC5QZ_c=",
        "https://media.istockphoto.com/id/1139328205/ko/%EC%82%AC%EC%A7%84/%EC%B6%95%EC%A0%9C-%EC%B6%94%EC%83%81%EC%A0%81%EC%9D%B8-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B8%B0%EB%A6%84-%EB%9E%A8%ED%94%84-%EA%B5%BD%EA%B8%B0.jpg?s=2048x2048&w=is&k=20&c=IU_AQVPtDoLANkAmK6hEMQ4Qfd9bQgYPtmZ2BC5QZ_c=",
        "https://media.istockphoto.com/id/1139328205/ko/%EC%82%AC%EC%A7%84/%EC%B6%95%EC%A0%9C-%EC%B6%94%EC%83%81%EC%A0%81%EC%9D%B8-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B8%B0%EB%A6%84-%EB%9E%A8%ED%94%84-%EA%B5%BD%EA%B8%B0.jpg?s=2048x2048&w=is&k=20&c=IU_AQVPtDoLANkAmK6hEMQ4Qfd9bQgYPtmZ2BC5QZ_c=",
      ],
      mainSwiperOptions: {
        slidesPerView: 1,
        navigation: true,
        thumbs: {
          swiper: null,
        },
      },
      thumbSwiperOptions: {
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      },
    };
  },
  methods: {
    goNext() {
      this.$refs.mainSwiper.swiper.slideNext();
      this.$refs.thumbSwiper.swiper.slideNext();
    },
    goPrev() {
      this.$refs.mainSwiper.swiper.slidePrev();
      this.$refs.thumbSwiper.swiper.slidePrev();
    },
    onSwiper(swiper) {
      this.mainSwiperOptions.thumbs.swiper = swiper;
    },
  },
  mounted() {
    // Swiper 인스턴스 생성 후 네비게이션 엘리먼트 설정
    this.$refs.mainSwiper.swiper.navigation.nextEl = ".thumb-nav-next, .swiper-button-next";
    this.$refs.mainSwiper.swiper.navigation.prevEl = ".thumb-nav-prev, .swiper-button-prev";
  },
};
</script>

<style lang="scss">
.main-swiper {
  width: 600px;
  margin: 0 auto;
  .swiper-slider {
    width: 100%;
  }
}
</style>
