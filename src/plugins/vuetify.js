import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme")).dark
      : true
  }
});
