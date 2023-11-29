<template>
  <div class="container">
    <div class="row">
      <div class="col-12 py-5">
        <div class="button-wrap setup-button">
          <div class="lt">
            <button type="button" class="btn btn-dark btn-sm" @click="setButtonClass('')">default</button>
            <button type="button" class="btn btn-dark btn-sm" @click="setButtonClass('btn-outline-dark')">outlined</button>
            <button type="button" class="btn btn-dark btn-sm" @click="setButtonClass('btn-light')">tonal</button>
            <button type="button" class="btn btn-dark btn-sm" @click="setButtonClass('btn-secondary')">text</button>
            <button type="button" class="btn btn-dark btn-sm" @click="setButtonClass('fw-bold')">bold</button>
          </div>
          <div class="rt">
            <button type="button" class="btn btn-secondary btn-sm">icon</button>
            <button type="button" class="btn btn-secondary btn-sm" @click="prependIcon = 'search'">prepend icon</button>
            <button type="button" class="btn btn-secondary btn-sm" @click="appendIcon = 'search'">append icon</button>
            <button type="button" class="btn btn-secondary btn-sm">stacked</button>
          </div>
        </div>
        <div class="button-stage">
          <mr-button type="submit" label="버튼" :onClick="handleClick" :buttonClass="`btn ${buttonClass}`">
            <template #prepend>
              <span class="material-symbols-outlined">{{ prependIcon }}</span>
            </template>
            Click me!
            <template #append>
              <span class="material-symbols-outlined">{{ appendIcon }}</span>
            </template>
          </mr-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MrButton from "@/components/MrButton.vue";
import { ref } from "vue";

const buttonClass = ref(null);
const prependIcon = ref(null);
const appendIcon = ref(null);

const handleClick = () => {
  console.log("버튼을 클릭했습니다!");
};

const setButtonClass = (className) => {
  buttonClass.value = className;
};

// const setIcons = (txt) => {
//   prependIcon.value = txt;
// };
</script>

<style lang="scss">
.setup-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f7f7f7;
  padding: 20px 20px;

  .lt {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .rt {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
  .btn {
    margin: 0;
    text-transform: capitalize;
  }
}

.button-stage {
  margin-top: 50px;
  height: 300px;
  border: 1px solid #ddd;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .btn-label-txt {
    .fw-bold {
      font-weight: 700 !important;
    }
  }
}
</style>
