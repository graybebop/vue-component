<template>
  <div class="toggle-item">
    <button type="button" class="btn btn-sm btn-outline-dark" @click="toggle">{{ button }}</button>

    <transition :name="transname" @enter="onEnter" @after-enter="onAfterEnter">
      <div v-if="toggleState" class="content"><slot name="content"></slot></div>
    </transition>
  </div>
</template>

<script setup>
import { onMounted, ref, defineProps } from "vue";

const props = defineProps({
  button: String,
  content: String,
  transname: String,
});

const toggleState = ref(false);

const toggle = () => {
  toggleState.value = !toggleState.value;
};

const onEnter = (el, done) => {
  setTimeout(() => {
    el.style.maxHeight = el.scrollHeight + "px";
    done();
    document.body.scrollTo({
      top: -1500,
      behavior: "smooth",
    });
  }, 500);
};

const onAfterEnter = (el) => {
  console.log(el);
};

onMounted(() => {
  console.log(props);
});
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}

//구간 처음부터
.fade-enter-from {
  max-height: 0;
  opacity: 0;
}
//구간 마지막
.fade-enter-to {
  max-height: calc(100vh - 1px);
  opacity: 1;
}
//reverse 되는 구간
//구간 마지막의 첨 부터
.fade-leave-from {
  max-height: calc(100vh - 1px);
  opacity: 1;
}
//구간 마지막의 마지막까지
.fade-leave-to {
  max-height: 0;
  opacity: 0;
}

.content {
  box-shadow: 1px 0 10px #aaa;
  padding: 8px;
  overflow: hidden;
  position: relative;
}
</style>
