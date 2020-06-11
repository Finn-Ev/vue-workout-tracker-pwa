<template>
  <v-card class="my-3 mx-2">
    <v-card-title>{{ idx + 1 }}. {{ exercise.name }} </v-card-title>

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
      <v-btn @click="saveExercise" text color="success">Übung speichern</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["exercise", "idx"],
  data() {
    return {
      weight: null,
      sets: [0, 0, 0, 0]
    };
  },
  methods: {
    changeSetValue(n, reps) {
      if (this.sets[n] >= reps * 1.5) return this.sets.splice(n, 1, 1);
      this.sets.splice(n, 1, this.sets[n] + 1);
    },
    saveExercise() {
      const exerciseToSave = {
        name: this.exercise.name,
        sets: this.sets,
        weight: this.weight
      };
      let savedExercises =
        localStorage.getItem("ongoingExercises") ??
        JSON.parse(localStorage.getItem("ongoingExercises"));

      localStorage.setItem(
        "ongoingExercises",
        JSON.stringify([exerciseToSave, savedExercises])
      );
      console.log(localStorage.ongoingExercises);
    }
  }
};
</script>

<style lang="scss" scoped></style>
