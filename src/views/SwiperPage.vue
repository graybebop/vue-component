<template>
  <div>
    <div class="main-swiper">
      <swiper :modules="modules" @swiper="setMainSwiper" :slide-per-view="1" :thumbs="{ swiper: thumbSwiper }" ref="mainSwiper" navigation>
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <img :src="slide.origin" alt="Main slide" @error="onImageError" />
        </swiper-slide>
      </swiper>
    </div>

    <div class="thumbs-swiper">
      <swiper :modules="modules" @swiper="setThumbSwiper" :slide-per-view="1" class="swiper" ref="thumbSwiper">
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <img :src="slide.thumb" alt="Thumb slide" @error="onImageError" />
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
        {
          origin: "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg",
          thumb: "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg",
        },
        {
          origin: "https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg",
          thumb: "https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg",
        },
        {
          origin: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg/1200px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg",
          thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg/1200px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg",
        },
        {
          origin: "",
          thumb: "",
        },
      ],
      mainSwiper: null,
      thumbSwiper: null,
      noImage: "https://st.depositphotos.com/2934765/53192/v/450/depositphotos_531920820-stock-illustration-photo-available-vector-icon-default.jpg",
      // mainSwiperOptions: {
      //   slidesPerView: 1,
      //   navigation: true,
      //   thumbs: {
      //     swiper: this.thumbSwiper,
      //   },
      //   autoHeight: true,
      // },
      // thumbSwiperOptions: {
      //   slidesPerView: 4,
      //   freeMode: true,
      //   watchSlidesVisibility: true,
      //   watchSlidesProgress: true,
      // },
    };
  },
  methods: {
    setMainSwiper(swiper) {
      this.mainSwiper = swiper;
    },
    goNext() {
      this.$refs.mainSwiper.swiper.slideNext();
      this.$refs.thumbSwiper.swiper.slideNext();
    },
    goPrev() {
      this.$refs.mainSwiper.swiper.slidePrev();
      this.$refs.thumbSwiper.swiper.slidePrev();
    },
    setThumbSwiper(swiper) {
      this.thumbSwiper = swiper;
    },
    onImageError(e) {
      e.target.src = this.noImage;
      console.log("이미지 에러 :", e.target.src);
    },
  },
  mounted() {
    // Swiper 인스턴스 생성 후 네비게이션 엘리먼트 설정
    //this.$refs.mainSwiper.swiper.navigation.nextEl = ".thumb-nav-next, .swiper-button-next";
    // this.$refs.mainSwiper.swiper.navigation.prevEl = ".thumb-nav-prev, .swiper-button-prev";
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

.thumbs-swiper {
  .swiper-slide {
    width: 60px !important;
    height: 60px;
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
