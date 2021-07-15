<template>
  <div>
    <div class="content" v-if="workouts.ongoingWorkout.id">
      <h3 class="mt-3 text-center font-weight-regular">
        Aktives Training: {{ activeWorkout.name }}
      </h3>

      <v-card class="mx-2 my-3" v-if="!warmupCompleted">
        <v-card-title>Aufwärmen! </v-card-title>
        <v-card-subtitle class="mb-n3">
          z.B. mit diesem
          <a
            class="text-decoration-none"
            target="blank"
            href="https://www.youtube.com/watch?v=p-v_obY-lYw&ab_channel=CoachStef"
          >
            <span class="link">Video</span
            ><v-icon class="ml-1">mdi-youtube</v-icon>
          </a>
        </v-card-subtitle>
        <v-card-actions>
          <v-btn
            @click="setWarmupAsCompleted"
            text
            block
            tag="div"
            color="success"
          >
            Ich bin aufgewärmt</v-btn
          >
        </v-card-actions>
      </v-card>

      <div v-if="warmupCompleted">
        <exercise
          class="mt-3 mx-2"
          v-for="(exercise, idx) in activeWorkout.exercises"
          :key="exercise.name"
          :exercise="exercise"
          :idx="idx"
          :savedExerciseData="savedExerciseData"
        />

        <div class="buttons mx-2 mt-1 mb-3">
          <v-btn
            color="success"
            @click="
              setDialogValues({
                show: true,
                title: 'Training speichern?',
                text: 'Willst du das Training wirklich speichern und beenden?',
                textColor: 'green',
                onconfirmMethod: finishWorkout,
                confirmText: 'Speichern & Beenden'
              })
            "
            >Training speichern & beenden
          </v-btn>

          <v-btn
            color="red"
            class="mt-3 white--text"
            @click="
              setDialogValues({
                show: true,
                title: 'Achtung',
                text:
                  'Willst du das Training wirklich abbrechen? Deine Eingaben werden nicht gespeichert.',
                textColor: 'red',
                onconfirmMethod: cancelWorkout,
                confirmText: 'Training abbrechen'
              })
            "
          >
            Training abbrechen
          </v-btn>
        </div>
      </div>
    </div>
    <div
      class="d-flex flex-column mt-n5 w-100 vh-100 align-center justify-center"
      v-else
    >
      <div class="mb-3">
        Kein aktives Training vorhanden
      </div>
      <v-btn to="/plans">Zu den Plänen</v-btn>
    </div>
  </div>
</template>

<script>
import workoutData from "../workout-data";

import Exercise from "../components/Exercise";
import { mapState } from "vuex";

export default {
  components: {
    Exercise
  },
  data() {
    return {
      workoutData,
      completedExercises: []
    };
  },
  computed: {
    activeWorkout() {
      const [workout] = this.workoutData.filter(
        workout => workout.id == this.workouts.ongoingWorkout.id
      );
      return workout;
    },
    warmupCompleted() {
      return this.workouts.ongoingWorkout.warmupCompleted;
    },
    savedExerciseData() {
      return (
        this.workouts.savedWorkouts.filter(
          workout => workout.name == this.activeWorkout.name
        )[0]?.exercises ?? []
      );
    },
    ...mapState(["workouts"])
  },
  methods: {
    setWarmupAsCompleted() {
      this.$store.dispatch("workouts/completeWarmup");
    },
    setDialogValues({ ...dialogData }) {
      this.$store.dispatch("dialog/setDialog", dialogData);
    },
    finishWorkout() {
      const ongoingExercises = this.workouts.ongoingWorkout.exercises;

      if (!ongoingExercises.length) {
        this.$store.dispatch("alerts/setAlert", {
          message: "Du musst mindestens eine Übung speichern.",
          color: "red",
          timeout: 3000
        });
        this.$store.dispatch("dialog/closeDialog");
        return;
      }

      const { startDate } = this.workouts.ongoingWorkout;

      const workoutToSave = {
        date: Date.now(),
        duration:
          Math.ceil((Date.now() - startDate) / (1000 * 60)) + " minuten",
        name: this.activeWorkout.name,
        exercises: ongoingExercises
      };

      this.$store.dispatch("alerts/setAlert", {
        message: `Das heutige Training "${this.activeWorkout.name}" wurde gespeichert`,
        color: "green",
        timeout: 4000
      });
      this.$store.dispatch("workouts/saveWorkout", workoutToSave);
      this.$store.dispatch("dialog/closeDialog");
      this.$router.push("/history");
    },
    cancelWorkout() {
      this.$store.dispatch("workouts/cancelWorkout");
      this.$store.dispatch("dialog/closeDialog");
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: red !important;
}

.mdi::before {
  color: red;
}
</style>
