<template>
  <div class="toggle-item">
    <button type="button" class="btn btn-sm btn-outline-dark" @click="toggle(0)">토글테스트-1</button>

    <transition name="expand" @enter="onEnter" @after-enter="onAfterEnter">
      <div v-if="toggleStates[0]" class="content">
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
      </div>
    </transition>
  </div>

  <div class="toggle-item">
    <button type="button" class="btn btn-sm btn-outline-dark" @click="toggle(1)">토글테스트-2</button>

    <transition name="expand" @enter="onEnter" @after-enter="onAfterEnter">
      <div v-if="toggleStates[1]" class="content">
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
        보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트 보이기텍스트
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const toggleStates = ref([false, false]);

const toggle = (n) => {
  toggleStates.value[n] = !toggleStates.value[n];
};

const onEnter = (el, done) => {
  // Next tick을 사용하여 높이 계산 전에 DOM 업데이트가 확실히 이루어지도록 합니다.
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
</script>

<style lang="scss">
.expand-enter-active,
.expand-leave-active {
  transition: all 0.5s ease-out;
}

//구간 처음부터
.expand-enter-from {
  max-height: 0;
  //opacity: 0;
  height: 0;
}
//구간 마지막
.expand-enter-to {
  max-height: calc(100vh - 1px);
  //opacity: 1;
  height: auto;
}
//reverse 되는 구간
//구간 마지막의 첨 부터
.expand-leave-from {
  max-height: calc(100vh - 1px);
  //opacity: 1;
  height: 3000px;
}
//구간 마지막의 마지막까지
.expand-leave-to {
  max-height: 0;
  //opacity: 0;
  height: 0;
}

.content {
  box-shadow: 1px 0 10px #aaa;
  padding: 8px;
  overflow: hidden;
  position: relative;
}
</style>
