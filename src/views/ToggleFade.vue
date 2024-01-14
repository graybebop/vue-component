<template>
  <transition-comp transname="fade" :button="'토글테스트-1'">
    <template #content> 텍스트-1 </template>
  </transition-comp>
  <transition-comp transname="fade" :button="'토글테스트-2'">
    <template #content> 텍스트-2 </template>
  </transition-comp>
</template>

<script setup>
import TransitionComp from "@/components/MrTransFade.vue";
</script>
