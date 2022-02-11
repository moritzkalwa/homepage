import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueSmoothScroll from 'vue3-smooth-scroll';

import { registerSW } from "virtual:pwa-register"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const updateSW = registerSW({
  onOfflineReady: () => console.log("offline ready"),
})

const app = createApp(App);

app.use(router);
app.use(VueSmoothScroll);

app.mount("#app");
