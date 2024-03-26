<template>
  <div class="tab-menu">
    <button type="button" class="btn btn-sm btn-outline-dark" @click="toggle(0)">토글테스트-1</button>
    <button type="button" class="btn btn-sm btn-outline-dark" @click="toggle(1)">토글테스트-2</button>
    <button type="button" class="btn btn-sm btn-outline-dark" @click="toggle(2)">토글테스트-3</button>
  </div>
  <div class="tab-cnt">
    <Transition name="fade">
      <div :class="`toggle-cnt ${toggleStates[0] ? 'on' : ''} `">
        orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu
      </div>
    </Transition>
    <Transition name="fade">
      <div :class="`toggle-cnt ${toggleStates[1] ? 'on' : ''} `">텍스트보이기2</div>
    </Transition>
    <Transition name="fade">
      <div :class="`toggle-cnt ${toggleStates[2] ? 'on' : ''} `">
        각급 선거관리위원회는 선거인명부의 작성등 선거사무와 국민투표사무에 관하여 관계 행정기관에 필요한 지시를 할 수 있다. 위원은 정당에 가입하거나 정치에 관여할 수 없다. 대통령의 임기는 5년으로
        하며, 중임할 수 없다. 국가는 전통문화의 계승·발전과 민족문화의 창달에 노력하여야 한다. 국군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로 하며, 그 정치적 중립성은 준수된다.
      </div>
    </Transition>
  </div>

  <div class="toggle-cnt on">
    orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, a 각급 선거관리위원회는 선거인명부의 작성등 선거사무와 국민투표사무에 관하여 관계 행정기관에 필요한 지시를 할 수
    있다. 위원은 정당에 가입하거나 정치에 관여할 수 없다. 대통령의 임기는 5년으로 하며, 중임할 수 없다. 국가는 전통문화의 계승·발전과 민족문화의 창달에 노력하여야 한다. 국군은 국가의 안전보장과
    국토방위의 신성한 의무를 수행함을 사명으로 하며, 그 정치적 중립성은 준수된다. nd more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const toggleStates = ref([false, false, false]);

const toggle = (index) => {
  for (let i = 0; i < 3; i++) {
    toggleStates.value[i] = false;
  }

  toggleStates.value[index] = true;
};

// function onEnter(el, done) {
//   // call the done callback to indicate transition end
//   // optional if used in combination with CSS
//   console.log(done);
//   done();
// }

onMounted(() => {
  toggleStates.value[0] = true;
});
</script>

<style lang="scss">
.tab-cnt {
  position: relative;
  transition: all 0.5s;
}
.tab-menu {
  display: flex;
  flex-direction: row;
}
.toggle-cnt {
  padding: 30px 100px;
  border: 1px solid #000;
  transform-origin: top;
  opacity: 0;
  transition: all 0.5s;
  position: absolute;
  transform: translate3D(10px, 0, 0);
  &.on {
    position: relative;
    opacity: 1;
    transform: translate3D(0, 0, 0);
  }
}
// .fade-enter-active {
//   position: absolute;
//   opacity: 2;
// }
// .fade-leave-active {
//   position: absolute;
//   opacity: 1;
//   transition: all 0.5s ease;
//   //transform: scaleY(1);
//   position: relative;
//   z-index: 1;
// }
// .fade-enter-from {
//   position: absolute;
//   opacity: 0;
//   //transform: scaleY(0);
//   z-index: 1;
// }
.fade-enter-from,
.fade-enter-active {
  //position: relative;
  opacity: 0;
  transition: all 0.5s;
}
.fade-enter-to {
  //position: relative;
  opacity: 1;
}

// .fade-leave-to {
//   position: relative;
//   opacity: 0;
//   //transform: scaleY(0);
//   z-index: 2;
// }
</style>
