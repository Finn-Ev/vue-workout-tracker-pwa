<template>
  <div>
    <div v-if="workoutId">
      <h3 class=" mt-3 text-center font-weight-regular">
        Aktives Training: {{ activeWorkout.name }}
      </h3>
      <Exercise
        class="my-3 mx-2"
        v-for="(exercise, idx) in activeWorkout.exercises"
        :key="exercise.name"
        :exercise="exercise"
        :idx="idx"
      />

      <v-btn class="mt-3" @click="finishWorkout">Training beenden</v-btn>
    </div>

    <div v-else>
      Kein aktives Training vorhanden
      <v-btn to="/plans">Zu den Plänen</v-btn>
    </div>
  </div>
</template>

<script>
import workouts from "../workout-data/workouts";
import Exercise from "../components/Exercise";
export default {
  components: {
    Exercise
  },
  data() {
    return {
      workouts,
      completedExercises: []
    };
  },
  computed: {
    workoutId() {
      return localStorage.getItem("ongoingWorkout");
    },
    activeWorkout() {
      const [training] = workouts.filter(
        workout => workout.id == this.workoutId
      );
      return training;
    }
  },
  methods: {
    finishWorkout() {
      // TODO: push ongoing workout to "doneWorkouts" Array in local Storage
      localStorage.removeItem("ongoingWorkout");
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped></style>
