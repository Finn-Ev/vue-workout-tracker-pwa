<template>
  <div class="responsive">
    <h2 class="mt-3 text-center font-weight-regular">Verlauf</h2>
    <div v-if="savedWorkouts.length">
      <SavedWorkout
        v-for="workout in savedWorkouts"
        :key="workout.date"
        :workout="workout"
      />
    </div>
    <div v-else>
      <p class="text-center">
        Du hast noch keine Trainingseinheiten gespeichert
      </p>
    </div>
  </div>
</template>

<script>
import SavedWorkout from "../components/other/SavedWorkout";
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
