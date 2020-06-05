import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueHead from "vue-head";

import { LoaderPlugin } from "vue-google-login";

Vue.config.productionTip = false;

Vue.use(LoaderPlugin, {
  client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID,
});

Vue.use(VueHead);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
