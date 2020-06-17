<template>
  <div>
    <v-snackbar v-model="showAlert" color="red" top :timeout="3500">
      Du musst mindestens eine Übung speichern.
    </v-snackbar>

    <div class="responsive" v-if="workoutId">
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
              showDialog: true,
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
              showDialog: true,
              title: 'Achtung',
              text:
                'Willst du das Training wirklich abbrechen? Deine Eingaben werden nicht gespeichert.',
              textColor: 'red',
              onconfirmMethod: cancelWorkout,
              confirmText: 'Training abbrechen'
            })
          "
          >Training abbrechen</v-btn
        >
        <Dialog
          :type="dialog.type"
          :showDialog="dialog.showDialog"
          @hideDialog="dialog.showDialog = false"
          :title="dialog.title"
          :textColor="dialog.textColor"
          :text="dialog.text"
          :onconfirmMethod="dialog.onconfirmMethod"
          :confirmText="dialog.confirmText"
        />
      </div>
    </div>

    <div v-else>
      Kein aktives Training vorhanden
      <v-btn to="/plans">Zu den Plänen</v-btn>
    </div>
  </div>
</template>

<script>
import workouts from "../workout-data/workouts";
import Exercise from "../components/other/Exercise";
import Dialog from "../components/shared/Dialog";
export default {
  components: {
    Exercise,
    Dialog
  },
  data() {
    return {
      dialog: {},
      workouts,
      completedExercises: [],
      showAlert: false
    };
  },
  computed: {
    workoutId() {
      return this.$store.getters.ongoingWorkout?.id;
    },
    activeWorkout() {
      const [workout] = workouts.filter(
        workout => workout.id == this.workoutId
      );
      return workout;
    },
    savedWorkouts() {
      return this.$store.getters.savedWorkouts;
    },
    savedExerciseData() {
      return this.savedWorkouts.filter(
        workout => workout.name == this.activeWorkout.name
      ).length
        ? this.savedWorkouts.filter(
            workout => workout.name == this.activeWorkout.name
          )[0].exercises
        : [];
    }
  },
  methods: {
    setDialogValues({ ...dialogData }) {
      this.dialog = dialogData;
    },
    finishWorkout() {
      const ongoingExercises = this.$store.getters.ongoingWorkout.exercises;

      if (!ongoingExercises.length) {
        this.showAlert = true;
        this.dialog.showDialog = false;
        return;
      }

      const { startDate } = this.$store.getters.ongoingWorkout;

      const workoutToSave = {
        date: Date.now(),
        duration:
          Math.ceil((Date.now() - startDate) / (1000 * 60)) + " minuten",
        name: this.activeWorkout.name,
        exercises: ongoingExercises
      };

      this.$store.dispatch("saveWorkout", workoutToSave);
      this.$router.push("/history");
    },
    cancelWorkout() {
      this.$store.dispatch("cancelWorkout");
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss"></style>
