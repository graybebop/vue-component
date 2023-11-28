<template>
  <post-card>
    <h2>Card Title</h2>
    <img src="https://picsum.photos/200" />
    <button>Read more...</button>
  </post-card>

  <post-card>
    <img src="https://picsum.photos/200" />
  </post-card>
</template>

<script>
import PostCard from "./PostCard.vue";

export default {
  components: { PostCard },
};
</script>
