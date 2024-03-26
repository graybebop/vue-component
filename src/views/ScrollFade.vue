<template>
  <div class="cnt-group" ref="cntGroup">
    <div v-for="n in 10" :key="n" class="cnt-box" :data-box="n" :class="{ 'fade-in': visibleBoxes.includes(n), 'fade-out': !visibleBoxes.includes(n) && fadedOutBoxes.includes(n) }">
      afhkhfkfhkadshfklasdhfkldshfklshfklh {{ n }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const visibleBoxes = ref([]);
const fadedOutBoxes = ref([]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const boxNumber = parseInt(entry.target.dataset.box);
        if (entry.isIntersecting) {
          if (!visibleBoxes.value.includes(boxNumber)) {
            visibleBoxes.value.push(boxNumber);
          }
          const fadedIndex = fadedOutBoxes.value.indexOf(boxNumber);
          if (fadedIndex !== -1) {
            fadedOutBoxes.value.splice(fadedIndex, 1);
          }
        } else {
          const visibleIndex = visibleBoxes.value.indexOf(boxNumber);
          if (visibleIndex !== -1) {
            visibleBoxes.value.splice(visibleIndex, 1);
            if (!fadedOutBoxes.value.includes(boxNumber)) {
              fadedOutBoxes.value.push(boxNumber);
            }
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll(".cnt-box").forEach((box) => {
    observer.observe(box);
  });
});
</script>

<style lang="scss">
.cnt-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  overflow: hidden;

  .cnt-box {
    width: 100%;
    height: 1500px;
    border: 1px solid #ddd;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s, transform 0.5s;

    &.fade-in {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    &.fade-out {
      opacity: 0;
      transform: translate3d(0, 0, 0);
    }
  }
}
</style>
