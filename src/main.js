import { createApp } from "vue";
import App from "./App.vue";
import TheHeader from "./layouts/TheHeader.vue";

import router from "./router/router.js";
import store from "./store/store.js";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("the-header", TheHeader);

app.mount("#app");
