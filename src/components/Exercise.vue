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

      <v-card-text v-if="lastTrainingStats">
        <h4>Stats vom letzten Training:</h4>
        <div>Genutztes Gewicht: {{ lastTrainingStats.weight }}</div>
        <div>
          Wiederholungen:
          {{ lastTrainingStats.sets.toString().replace(/,/g, "/") }}
        </div>
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
              sets: sets.filter(set => set !== 0),
              weight: weight ? weight : 0
            })
          "
          text
          block
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
      hasBeenSaved: false
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
    lastTrainingStats() {
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
      return this.$store.getters.ongoingWorkout.exercises;
    },

    // check if the exercise with this name was saved already during the workout
    exerciseAlreadySaved() {
      this.hasBeenSaved = this.getOngoingExercises().filter(
        exercise => exercise.name === this.exercise.name
      ).length;
      return this.hasBeenSaved;
    },

    saveExercise(exerciseToSave) {
      if (!this.exerciseAlreadySaved()) {
        this.$store.dispatch("saveExercises", [
          ...this.getOngoingExercises(),
          exerciseToSave
        ]);
      } else {
        const filteredExercises = this.getOngoingExercises().filter(
          exercise => exercise.name !== exerciseToSave.name // delete the current version of the exercise
        );

        this.$store.dispatch("saveExercises", [
          ...filteredExercises,
          exerciseToSave
        ]);
      }
      this.hasBeenSaved = true;
      this.edit = false;
    }
  }
};
</script>

<style lang="scss" scoped></style>
