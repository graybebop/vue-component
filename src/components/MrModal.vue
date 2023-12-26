<template>
  <Teleport to="body">
    <div :class="{ modal: true, fade: showModal == true ? 'fade' : '' }" ref="modal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <!-- <h1 class="modal-title fs-5">Modal title</h1> -->
            <slot name="title"></slot>
            <button type="button" class="btn-close" @click="hideModal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="hideModal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script setup>
import { ref, onMounted, onUnmounted, watchEffect, watch } from "vue";
import Bootstrap from "bootstrap/dist/js/bootstrap";
const modal = ref(null);
let bsModal = null;
/* eslint-disable */
const props = defineProps({
  showModal: Boolean,
});
const emit = defineEmits(["hide"]);

onMounted(() => {
  bsModal = new Bootstrap.Modal(modal.value, { keyboard: false });
  console.log("props :", props.showModal);
  bsModal.show();
});

onUnmounted(() => {
  bsModal.hide();
  // bsModal.dispose();
  //   if (bsModal) {
  //     bsModal.dispose();
  //   }
});

const hideModal = () => {
  bsModal.hide();
  emit("hide");
};

//아래 함수들은 테스트용 - 삭제해도 무방
watchEffect(() => {
  console.log(props.showModal);

  //   if (props.showModal) {
  //     bsModal.show();
  //   }
});
watch(
  () => props.showModal,
  (newValue) => {
    if (newValue) {
      // bsModal.show();
    }
  }
);
</script>
