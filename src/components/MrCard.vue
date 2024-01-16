<template>
  <div :class="`card ${cardClass ? cardClass : ''}`" v-if="cardType === 'album'">
    <!-- 이미지가 있다면 -->
    <img :src="`${cardImage !== null ? cardImage : defaultImage}`" @error="onImageError" class="card-img-top" alt="Card image" v-if="bgImage == null" />
    <!-- bg 이미지가 있는경우 -->
    <div :style="bgStyle" v-else></div>

    <div class="card-body">
      <h5 class="card-title">
        <slot name="title"></slot>
      </h5>
      <p class="card-text">
        <slot name="sub-title"></slot>
      </p>
      <a :href="cardLink" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>

  <div class="card mb-3" v-else-if="cardType === 'list'" :style="{ height: bgHeight }">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="`${cardImage !== null ? cardImage : defaultImage}`" @error="onImageError" class="card-img-top" alt="Card image" v-if="bgImage == null" />
        <!-- bg 이미지가 있는경우 -->
        <div :style="bgStyle" v-else></div>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title"><slot name="title"></slot></h5>

          <p class="card-text">
            <slot name="sub-title"></slot>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// !== null 아닌경우
// != 같지 않음을 의
export default {
  name: "CardComponent",
  props: {
    cardImage: {
      type: String,
      default: null,
    },
    cardTitle: {
      type: String,
      default: "Card title",
    },
    cardText: {
      type: String,
      default: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    cardLink: {
      type: String,
      default: "#",
    },

    cardType: {
      type: String,
      default: "album",
    },

    bgImage: {
      type: String,
      default: null,
    },

    bgHeight: {
      type: String,
      default: null,
    },

    bgWidth: {
      type: String,
      default: null,
    },

    cardClass: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      defaultImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIvDZdFJUGi9HcQDsZFo_hLp6c0xhlZmEUzQ&usqp=CAU",
    };
  },
  methods: {
    onImageError(e) {
      e.target.src = "https://cdn.iconscout.com/icon/premium/png-256-thumb/image-error-2125973-1789289.png"; // 이미지 에러인경우 404
      console.log(e.target.src);
    },
  },
  computed: {
    bgStyle() {
      return this.bgImage ? `background-image:url(${this.bgImage}); background-repeat:no-repeat;background-size:cover; height:${this.bgHeight ? this.bgHeight : ""}; width:${this.bgWidth ? this.bgWidth : ""};` : ``;
    },
  },
  mounted() {
    // console.log(this.defaultImage);
  },
};
</script>

<style scoped lang="scss">
.card {
}

.img-thumbnail {
  width: 100%;
}
</style>
