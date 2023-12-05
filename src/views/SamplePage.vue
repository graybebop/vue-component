<!-- <template>
  <post-card content="Post Card 1" />
  <post-card content="Post Card 2" />

  <MrCard :cardImage="'https://example.com/image.jpg'" cardTitle="Example Title" cardText="This is an example card." :cardLink="'https://example.com'" />
  <MrCard :cardImage="'https://example.com/image2.jpg'" cardTitle="Another Title" cardText="This is another example card." :cardLink="'https://example.com'" />
</template>

<script setup>
import PostCard from "@/components/PostCard.vue";
import MrCard from "@/components/MrCard.vue";
</script> -->
<template>
  <MrCard :cardImage="'https://www.everwallpaper.co.uk/cdn/shop/products/jungle-leaves-bird-wallpaper-mural.jpg?v=1676526563'" cardTitle="Example Title" cardText="This is an example card." :cardLink="'https://example.com'" />
  <MrCard :cardImage="'https://www.everwallpaper.co.uk/cdn/shop/products/jungle-leaves-bird-wallpaper-mural.jpg?v=1676526563'" cardTitle="Another Title" cardText="This is another example card." :cardLink="'https://example.com'" />
</template>
<script setup>
import MrCard from "@/components/MrCard.vue";
</script>
