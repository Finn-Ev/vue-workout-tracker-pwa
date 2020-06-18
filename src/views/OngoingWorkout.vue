<template>
  <div>
    <div class="responsive" v-if="workouts.ongoingWorkout.id">
      <h3 class=" mt-3 text-center font-weight-regular">
        Aktives Training: {{ activeWorkout.name }}
      </h3>
      <Exercise
        class="mt-3 mx-2"
        v-for="(exercise, idx) in activeWorkout.exercises"
        :key="exercise.name"
        :exercise="exercise"
        :idx="idx"
        :savedExerciseData="savedExerciseData"
      />

      <div class="buttons mt-1 mx-4 mb-3">
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

    <div v-else>
      Kein aktives Training vorhanden
      <v-btn to="/plans">Zu den Plänen</v-btn>
    </div>
  </div>
</template>

<script>
import workoutData from "../workout-data/workouts";

import Exercise from "../components/other/Exercise";
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

    savedExerciseData() {
      return this.workouts.savedWorkouts.filter(
        workout => workout.name == this.activeWorkout.name
      ).length
        ? this.workouts.savedWorkouts.filter(
            workout => workout.name == this.activeWorkout.name
          )[0].exercises
        : [];
    },
    ...mapState(["workouts"])
  },
  methods: {
    setDialogValues({ ...dialogData }) {
      this.$store.dispatch("dialog/setDialog", dialogData);
    },
    finishWorkout() {
      const ongoingExercises = this.workouts.ongoingWorkout.exercises;

      if (!ongoingExercises.length) {
        this.$store.dispatch("alerts/setAlert", {
          message: "Du musst mindestens eine Übung speichern.",
          color: "red"
        });
        this.$store.dispatch("dialog/closeDialog");
        return;
      }

      // const { startDate } = this.workouts.ongoingWorkout;
      const { startDate } = this.workouts.ongoingWorkout;

      const workoutToSave = {
        date: Date.now(),
        duration:
          Math.ceil((Date.now() - startDate) / (1000 * 60)) + " minuten",
        name: this.activeWorkout.name,
        exercises: ongoingExercises
      };

      this.$store.dispatch("alerts/setAlert", {
        message: `Das heutige Training ${this.activeWorkout.name} wurde gespeichert`,
        color: "green",
        timeout: 2000
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

<style lang="scss"></style>
