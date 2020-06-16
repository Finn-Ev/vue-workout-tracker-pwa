<template>
  <div>
    <div v-if="workoutId">
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
                'Willst du das Training wirklich abbrechen? Deine Eingaben werden nicht gespeichert',
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
import Exercise from "../components/Exercise";
import Dialog from "../components/Dialog";
export default {
  components: {
    Exercise,
    Dialog
  },
  data() {
    return {
      dialog: {},
      workouts,
      completedExercises: []
    };
  },
  computed: {
    workoutId() {
      return JSON.parse(localStorage.getItem("ongoingWorkout"))?.id;
    },
    activeWorkout() {
      const [workout] = workouts.filter(
        workout => workout.id == this.workoutId
      );
      return workout;
    },

    savedExerciseData() {
      if (localStorage.getItem("savedWorkouts")) {
        return JSON.parse(localStorage.getItem("savedWorkouts")).filter(
          workout => workout.name == this.activeWorkout.name
        ).length
          ? JSON.parse(localStorage.getItem("savedWorkouts"))
              .filter(workout => workout.name == this.activeWorkout.name)
              .reverse()[0].exercises
          : [];
      }
      return [];
    }
  },
  methods: {
    setDialogValues({
      showDialog,
      title,
      text,
      textColor,
      onconfirmMethod,
      confirmText
    }) {
      this.dialog = {
        showDialog,
        title,
        text,
        textColor,
        onconfirmMethod,
        confirmText
      };
    },
    finishWorkout() {
      const ongoingExercises = JSON.parse(
        localStorage.getItem("ongoingExercises")
      );
      const { startDate } = JSON.parse(localStorage.getItem("ongoingWorkout"));
      const savedWorkouts = localStorage.getItem("savedWorkouts")
        ? JSON.parse(localStorage.getItem("savedWorkouts"))
        : [];

      const workoutToSave = {
        date: Date.now(),
        duration:
          Math.ceil((Date.now() - startDate) / (1000 * 60)) + " minuten",
        name: this.activeWorkout.name,
        exercises: ongoingExercises
      };

      savedWorkouts.push(workoutToSave);

      localStorage.setItem("savedWorkouts", JSON.stringify([...savedWorkouts]));

      // clean up
      localStorage.removeItem("ongoingWorkout");
      localStorage.removeItem("ongoingExercises");
      console.log(JSON.parse(localStorage.savedWorkouts));

      this.$router.push("/history");
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
