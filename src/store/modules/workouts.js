export const namespaced = true;

export const state = {
  ongoingWorkout: {
    isActive: false,
    exercises: []
  },
  savedWorkouts: []
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
  CANCEL_WORKOUT(state) {
    state.ongoingWorkout = {
      isActive: false,
      exercises: []
    };
  },
  CLEAR_WORKOUT_HISTORY(state) {
    state.savedWorkouts = [];
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
  cancelWorkout({ commit }) {
    commit("CANCEL_WORKOUT");
  },
  clearWorkoutHistory({ commit }) {
    commit("CLEAR_WORKOUT_HISTORY");
  }
};
