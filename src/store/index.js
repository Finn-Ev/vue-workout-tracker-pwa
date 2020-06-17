import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ongoingWorkout: {
      isActive: false,
      exercises: []
    },
    savedWorkouts: []
  },
  mutations: {
    SAVE_WORKOUT(state, workout) {
      state.savedWorkouts.push(workout);
      state.ongoingWorkout = {
        isActive: false,
        exercises: []
      };
    },
    SAVE_EXERCISES({ ongoingWorkout }, exercises) {
      ongoingWorkout.exercises = exercises;
    },
    MUTATE_ONGOING_WORKOUT(state, data) {
      state.ongoingWorkout = { ...state.ongoingWorkout, ...data };
    },
    CANCEL_WORKOUT(state) {
      state.ongoingWorkout = {
        isActive: false,
        exercises: []
      };
    },
    CLEAR_WORKOUT_HISTORY(state) {
      state.savedWorkouts = [];
    }
  },
  actions: {
    saveWorkout({ commit }, workout) {
      commit("SAVE_WORKOUT", workout);
    },
    saveExercises({ commit }, exercises) {
      commit("SAVE_EXERCISES", exercises);
    },
    mutateOngoingWorkout({ commit }, data) {
      commit("MUTATE_ONGOING_WORKOUT", data);
    },
    cancelWorkout({ commit }) {
      commit("CANCEL_WORKOUT");
    },
    clearWorkoutHistory({ commit }) {
      commit("CLEAR_WORKOUT_HISTORY");
    }
  },
  getters: {
    ongoingWorkout(state) {
      return state.ongoingWorkout;
    },
    savedWorkouts(state) {
      return state.savedWorkouts;
    }
  },
  plugins: [vuexLocal.plugin]
});
