<template>
  <div>
    <button type="button" @click="openModal">Show modal</button>
    <MrMddal v-if="showModal" :showModal="showModal" @hide="showModal = false">
      <template #title>
        <h1 class="modal-title display-3">모달 제목</h1>
      </template>
      <template #body> <p>컨텐츠가 들어갑니다.</p></template>
    </MrMddal>
  </div>
</template>

<script setup>
import MrMddal from "@/components/MrModal.vue";
import { ref } from "vue";

const showModal = ref(false);

const openModal = () => {
  //console.log(showModal.value);
  showModal.value = !showModal.value;
};
</script>
