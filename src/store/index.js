import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import * as alerts from "./modules/alerts";
import * as workouts from "./modules/workouts";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    workouts,
    alerts
  },
  plugins: [vuexLocal.plugin]
});
