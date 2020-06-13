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
      <div class="buttons mx-4 mb-3">
        <v-btn
          color="success"
          class="mt-3"
          @click="
            setDialogValues({
              type: 'save',
              showDialog: true,
              title: 'Training speichern?',
              text: 'Willst du das Training wirklich speichern und beenden?',
              url: '/',
              onconfirmMethod: finishWorkout
            })
          "
          >Training speichern & beenden
        </v-btn>

        <v-btn
          color="red"
          class="mt-3 white--text"
          @click="
            setDialogValues({
              type: 'cancel',
              showDialog: true,
              title: 'Achtung',
              text:
                'Willst du das Training wirklich abbrechen? Deine Eingaben werden nicht gespeichert',
              url: '/',
              onconfirmMethod: cancelWorkout
            })
          "
          >Training abbrechen</v-btn
        >
        <Dialog
          :type="dialog.type"
          :showDialog="dialog.showDialog"
          @hideDialog="dialog.showDialog = false"
          :title="dialog.title"
          :text="dialog.text"
          :onconfirmMethod="dialog.onconfirmMethod"
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
import Exercise from "../components/Exercise";
import Dialog from "../components/Dialog";
export default {
  components: {
    Exercise,
    Dialog
  },
  data() {
    return {
      dialog: {
        type: "",
        showDialog: false,
        title: "",
        text: "",
        onconfirmMethod: () => ({})
      },
      workouts,
      completedExercises: []
    };
  },
  computed: {
    workoutId() {
      return localStorage.getItem("ongoingWorkout");
    },
    activeWorkout() {
      const [workout] = workouts.filter(
        workout => workout.id == this.workoutId
      );
      return workout;
    }
  },
  methods: {
    setDialogValues({ type, showDialog, title, text, onconfirmMethod }) {
      this.dialog = { type, showDialog, title, text, onconfirmMethod };
    },
    finishWorkout() {
      const ongoingExercises = JSON.parse(
        localStorage.getItem("ongoingExercises")
      );
      const savedWorkouts = localStorage.getItem("savedWorkouts")
        ? JSON.parse(localStorage.getItem("savedWorkouts"))
        : [];

      const workoutToSave = {
        date: Date.now(),
        name: this.activeWorkout.name,
        exercises: ongoingExercises
      };
      savedWorkouts.push(workoutToSave);

      localStorage.setItem("savedWorkouts", JSON.stringify([...savedWorkouts]));

      // clean up
      localStorage.removeItem("ongoingWorkout");
      localStorage.removeItem("ongoingExercises");
      console.log(JSON.parse(localStorage.savedWorkouts));

      this.$router.push("/");
    },
    cancelWorkout() {
      localStorage.removeItem("ongoingWorkout");
      localStorage.removeItem("ongoingExercises");
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped></style>
