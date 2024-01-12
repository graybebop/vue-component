<template>
  <div :class="`toggle-item ${toggleStates[0] ? 'on' : ''}`">
    <button type="button" class="btn btn-sm btn-outline-dark" @click="toggle(0)">토글테스트-1</button>
    <div class="toggle-cnt" v-if="toggleStates[0]">텍스트보이기</div>
  </div>
  <div :class="`toggle-item ${toggleStates[1] ? 'on' : ''}`">
    <button type="button" class="btn btn-sm btn-outline-dark" @click="toggle(1)">토글테스트-2</button>
    <div class="toggle-cnt" v-if="toggleStates[1]">텍스트보이기</div>
  </div>
  <div :class="`toggle-item ${toggleStates[2] ? 'on' : ''}`">
    <button type="button" class="btn btn-sm btn-outline-dark" @click="toggle(2)">토글테스트-3</button>
    <div class="toggle-cnt" v-if="toggleStates[2]">텍스트보이기</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const toggleStates = ref([false, false, false]);

const toggle = (index) => {
  toggleStates.value[index] = !toggleStates.value[index];
};
</script>

<style lang="scss">
.toggle-item {
  .toggle-cnt {
    display: none;
  }

  &.on {
    .toggle-cnt {
      display: block;
    }
  }
}
</style>
