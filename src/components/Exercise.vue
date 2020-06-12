<template>
  <v-card class="my-3 mx-2">
    <v-card-title
      >{{ idx + 1 }}. {{ exercise.name }} <v-spacer></v-spacer>

      <v-icon @click="edit = !edit" v-if="hasBeenSaved">{{
        !edit ? "mdi-pencil" : "X"
      }}</v-icon>
    </v-card-title>
    <div v-if="!hasBeenSaved || edit">
      <v-card-subtitle>
        <div>Wiederholungen: {{ exercise.sets }} x {{ exercise.reps }}</div>
        <div>Pause: {{ exercise.pause }} min.</div>
        <div>Intervall: {{ exercise.intervall }}</div>
      </v-card-subtitle>

      <v-card-text>
        <h4>Stats vom letzten Training:</h4>
        <div>Genutztes Gewicht: /</div>
        <div>Wiederholungen: x/x/x/x</div>
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
              weight
            })
          "
          text
          color="success"
          >{{ hasBeenSaved ? "Eingabe ändern" : "Übung speichern" }}</v-btn
        >
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["exercise", "idx", "ongoingExercises"],
  data() {
    return {
      weight: null,
      sets: [0, 0, 0, 0],
      hasBeenSaved: this.ongoingExercises
        ? this.ongoingExercises.filter(
            exercise => exercise.name === this.exercise.name
          ).length
        : false,
      edit: false
    };
  },
  created() {
    if (
      this.ongoingExercises.filter(
        exercise => exercise.name === this.exercise.name
      )
    ) {
      const [exercise] = this.ongoingExercises.filter(
        exercise => exercise.name === this.exercise.name
      );
      this.weight = exercise.weight;
    }
  },
  methods: {
    changeSetValue(n, reps) {
      if (this.sets[n] >= reps * 1.5) return this.sets.splice(n, 1, 1);
      this.sets.splice(n, 1, this.sets[n] + 1);
    },
    saveExercise(exerciseToSave) {
      let savedExercises = localStorage.getItem("ongoingExercises")
        ? this.ongoingExercises
        : [];

      if (
        !savedExercises.filter(
          exercise => exercise.name === exerciseToSave.name // check if the exercise has not been saved at least once already
        ).length
      ) {
        localStorage.setItem(
          "ongoingExercises",
          JSON.stringify([exerciseToSave, ...savedExercises])
        );
        this.hasBeenSaved = true;
      } else {
        localStorage.setItem(
          "ongoingExercises",
          JSON.stringify(
            savedExercises.filter(
              exercise => exercise.name !== exerciseToSave.name
            )
          )
        );
        localStorage.setItem(
          "ongoingExercises",
          JSON.stringify([
            exerciseToSave,
            ...JSON.parse(localStorage.getItem("ongoingExercises"))
          ])
        );
      }
      this.edit = false;
      console.log(localStorage.ongoingExercises);
    }
  }
};
</script>

<style lang="scss" scoped></style>
