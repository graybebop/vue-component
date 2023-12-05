<template>
  <div class="card" style="width: 18rem">
    <img :src="cardImage" class="card-img-top" alt="Card image" />
    <div class="card-body">
      <h5 class="card-title">{{ cardTitle }}</h5>
      <p class="card-text">{{ cardText }}</p>
      <a :href="cardLink" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    cardImage: {
      type: String,
      default: "...",
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
  },
};
</script>

<style scoped lang="scss">
.card {
  /* 컴포넌트의 스타일을 여기에 작성하세요. */
}
</style>
