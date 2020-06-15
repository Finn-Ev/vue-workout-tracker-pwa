<template>
  <v-card class="my-3 mx-2">
    <v-card-title @click="edit = !edit"
      >{{ idx + 1 }}. {{ exercise.name }}

      <v-spacer></v-spacer>
      <v-icon color="success" v-if="hasBeenSaved">{{ "mdi-check" }}</v-icon>
    </v-card-title>
    <div v-if="!hasBeenSaved || edit">
      <v-card-subtitle>
        <div>Wiederholungen: {{ exercise.sets }} x {{ exercise.reps }}</div>
        <div>Pause: {{ exercise.pause }} min.</div>
        <div>Intervall: {{ exercise.intervall }}</div>
      </v-card-subtitle>

      <v-card-text v-if="lastTrainingData">
        <h4>Stats vom letzten Training:</h4>
        <div>Genutztes Gewicht: {{ lastTrainingData.weight }}</div>
        <div>Wiederholungen: {{ lastTrainingData.sets.toString() }}</div>
      </v-card-text>

      <v-card-text>
        <v-text-field
          v-model="weight"
          aria-autocomplete="false"
          type="number"
          label="Genutztes Gewicht in Kg"
        />

        <v-btn
          class="mr-2"
          @click="changeSetValue(n - 1, exercise.reps)"
          v-for="n in exercise.sets"
          :key="n"
          >{{ sets[n - 1] }}</v-btn
        >
      </v-card-text>

      <v-card-actions>
        <v-btn
          @click="
            saveExercise({
              name: exercise.name,
              sets,
              weight: weight ? weight : 0
            })
          "
          text
          color="success"
          >{{ hasBeenSaved ? "Bestätigen" : "Übung speichern" }}</v-btn
        >
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["exercise", "idx", "savedExerciseData"],
  data() {
    return {
      weight: null,
      sets: [0, 0, 0, 0],
      edit: false,
      hasBeenSaved: this.exerciseAlreadySaved() // for reactivity
    };
  },
  created() {
    if (this.exerciseAlreadySaved()) {
      const [exercise] = this.getOngoingExercises().filter(
        exercise => exercise.name === this.exercise.name
      );
      this.weight = exercise.weight;
      this.sets = exercise.sets;
    }
  },
  computed: {
    lastTrainingData() {
      const [lastTrainingValues] = this.savedExerciseData.filter(
        exercise => exercise.name === this.exercise.name
      );

      if (lastTrainingValues) {
        return {
          weight: lastTrainingValues.weight + " Kg",
          sets: lastTrainingValues.sets
        };
      }
      return null;
    }
  },

  methods: {
    changeSetValue(n, reps) {
      if (this.sets[n] >= reps * 1.5) return this.sets.splice(n, 1, 1);
      this.sets.splice(n, 1, this.sets[n] + 1);
    },
    // helper functions
    // all exercises from the current workout
    getOngoingExercises() {
      const ongoingExercises = localStorage.getItem("ongoingExercises")
        ? JSON.parse(localStorage.getItem("ongoingExercises"))
        : [];
      return ongoingExercises;
    },

    // check if the exercise with this name was saved already during the workout
    exerciseAlreadySaved() {
      return this.getOngoingExercises().filter(
        exercise => exercise.name === this.exercise.name
      ).length;
    },

    saveExercise(exerciseToSave) {
      if (!this.exerciseAlreadySaved()) {
        localStorage.setItem(
          "ongoingExercises",
          JSON.stringify([...this.getOngoingExercises(), exerciseToSave])
        );
      } else {
        localStorage.setItem(
          "ongoingExercises",
          JSON.stringify(
            this.getOngoingExercises().filter(
              exercise => exercise.name !== exerciseToSave.name // delete the current version of the exercise
            )
          )
        );

        if (this.getOngoingExercises().length) {
          localStorage.setItem(
            // add the updated version of the exercise if there are other exercises left to spread in again
            "ongoingExercises",
            JSON.stringify([...this.getOngoingExercises(), exerciseToSave])
          );
        } else {
          localStorage.setItem(
            // add the updated version of the exercise if there are no other exercises left to spread in again
            // ( to prevent bugs that occur when an empty array gets stringified and saved in LS )
            "ongoingExercises",
            JSON.stringify([exerciseToSave])
          );
        }
      }
      this.hasBeenSaved = true;
      this.edit = false;
      console.log(JSON.parse(localStorage.ongoingExercises));
    }
  }
};
</script>

<style lang="scss" scoped></style>
