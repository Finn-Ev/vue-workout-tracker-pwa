<template>
  <div>
    <h2 class="mt-3 text-center font-weight-regular">Verlauf</h2>
    <div v-if="savedWorkouts.length">
      <SavedWorkout
        v-for="workout in savedWorkouts"
        :key="workout.date"
        :workout="workout"
      />
    </div>
    <div v-else>Du hast noch keine Trainingseinheiten gespeichert</div>
  </div>
</template>

<script>
import SavedWorkout from "../components/SavedWorkout";
export default {
  components: {
    SavedWorkout
  },

  computed: {
    savedWorkouts() {
      const savedWorkouts = localStorage.getItem("savedWorkouts")
        ? JSON.parse(localStorage.getItem("savedWorkouts"))
        : [];

      return savedWorkouts;
    }
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
