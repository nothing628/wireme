import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import "./style.css";
import App from "./App.vue";

const pinia = createPinia();
pinia.use(piniaPersist);
createApp(App).use(pinia).mount("#app");
