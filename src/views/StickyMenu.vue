<template>
  <div>
    <div class="menu">
      <ul>
        <li v-for="(menu, index) in menus" :class="{ on: currentMenu === menu.id }" @click="scrollToMenu(menu.id)" :key="index">{{ menu.name }} - {{ index }}</li>
      </ul>
    </div>

    <div class="contents" v-for="(menu, index) in menus" :id="menu.id" style="height: 100vh" :key="index">{{ menu.name }} Content</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const menus = [
  { id: "content-1", name: "메뉴1" },
  { id: "content-2", name: "메뉴2" },
  { id: "content-3", name: "메뉴3" },
  { id: "content-4", name: "메뉴4" },
];
const currentMenu = ref("content-1");

const onScroll = () => {
  for (let i = menus.length - 1; i >= 0; i--) {
    const menu = menus[i];
    const element = document.getElementById(menu.id);

    if (window.scrollY >= element.offsetTop - 80) {
      currentMenu.value = menu.id;

      console.log(currentMenu.value);
      break;
    }
  }
};

window.addEventListener("scroll", onScroll);

const scrollToMenu = (id) => {
  const element = document.getElementById(id);
  window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
};
</script>

<style lang="scss">
.menu {
  position: sticky;
  top: 10px;
  ul {
    display: flex;
    flex-direction: row;
    border: 1px solid #ddd;

    li {
      border: 1px solid #ddd;
      width: 25%;
      padding: 10px;
      &.on {
        background-color: #000;
        color: #fff;
      }
    }
  }
}

.contents {
  border: 1px solid #ddd;
}
</style>
