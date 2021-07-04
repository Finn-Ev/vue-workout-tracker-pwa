<template>
  <div class="content">
    <h2 class="mt-3 text-center font-weight-regular">Trainings-Verlauf</h2>
    <div v-if="savedWorkouts.length">
      <saved-workout
        v-for="workout in savedWorkouts"
        :key="workout.date"
        :workout="workout"
      />
    </div>
    <div
      class="d-flex flex-column mt-n5 w-100 vh-100 align-center justify-center"
      v-else
    >
      <div class="mb-3">
        Du hast noch kein Training gespeichert
      </div>
      <v-btn to="/plans">Zu den Plänen</v-btn>
    </div>
  </div>
</template>

<script>
import SavedWorkout from "../components/SavedWorkout";
import { mapState } from "vuex";
export default {
  components: {
    SavedWorkout
  },
  computed: {
    ...mapState({
      savedWorkouts: state => state.workouts.savedWorkouts
    })
  }
};
</script>

<style lang="scss" scoped>
.v-expansion-panel-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.date {
  color: rgb(136, 136, 136);
}
</style>
