<template>
  <div>
    <div v-if="workoutId">
      <h3 class=" mt-3 text-center font-weight-regular">
        Aktives Training: {{ activeWorkout.name }}
      </h3>
      <v-card
        class="my-3 mx-2"
        v-for="(exercise, idx) in activeWorkout.exercises"
        :key="exercise.name"
      >
        <v-card-title>{{ idx + 1 }}. {{ exercise.name }} </v-card-title>

        <v-card-subtitle>
          <div>Wiederholungen: {{ exercise.sets }} x {{ exercise.reps }}</div>
          <div>Pause: {{ exercise.pause }} min.</div>
          <div>Intervall: {{ exercise.intervall }}</div>
        </v-card-subtitle>

        <v-card-text>
          <h4 class="">Stats letztes Training:</h4>
          <div>Genutztes Gewicht: /</div>
          <div>Wiederholungen: x/x/x/x</div>
        </v-card-text>

        <v-card-text>
          <v-text-field
            type="number"
            label="Genutztes Gewicht in Kg"
          ></v-text-field>
          <v-btn class="mr-2" v-for="n in exercise.sets" :key="n" rounded
            >0</v-btn
          >
        </v-card-text>

        <v-card-actions> </v-card-actions>
      </v-card>

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
export default {
  data() {
    return {
      workouts
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
