import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/js/bootstrap"; // Bootstrap JS와 Popper.js 포함

import "@/assets/css/bootstrap.min.css";
import "@/assets/css/styles.scss";

createApp(App).use(store).use(router).mount("#app");
