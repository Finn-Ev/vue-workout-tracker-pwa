export const namespaced = true;

export const state = {
  ongoingWorkout: {
    isActive: false,
    exercises: []
  },
  savedWorkouts: [],
  activePlan: ""
};
export const mutations = {
  SAVE_WORKOUT(state, workout) {
    state.savedWorkouts.unshift(workout);
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
  SET_ACTIVE_PLAN(state, planId) {
    state.activePlan = planId;
  },
  CANCEL_WORKOUT(state) {
    state.ongoingWorkout = {
      isActive: false,
      exercises: []
    };
  },
  // CLEAR_WORKOUT_HISTORY(state) {
  //   state.savedWorkouts = [];
  // },
  CLEAR_WORKOUT_STATE(state) {
    state.ongoingWorkout = {
      isActive: false,
      exercises: []
    };
    state.savedWorkouts = [];
    state.activePlan = "";
  }
};

export const actions = {
  saveWorkout({ commit }, workout) {
    commit("SAVE_WORKOUT", workout);
  },
  saveExercises({ commit }, exercises) {
    commit("SAVE_EXERCISES", exercises);
  },
  mutateOngoingWorkout({ commit }, data) {
    commit("MUTATE_ONGOING_WORKOUT", data);
  },
  setActivePlan({ commit }, data) {
    commit("SET_ACTIVE_PLAN", data);
  },
  cancelWorkout({ commit }) {
    commit("CANCEL_WORKOUT");
  },
  // clearWorkoutHistory({ commit }) {
  //   commit("CLEAR_WORKOUT_HISTORY");
  // },
  clearWorkoutState({ commit }) {
    commit("CLEAR_WORKOUT_STATE");
  }
};
