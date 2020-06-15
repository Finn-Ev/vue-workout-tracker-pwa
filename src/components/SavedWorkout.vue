<template>
  <v-card class="mx-2 mt-2">
    <div @click="showDetails = !showDetails">
      <v-card-title>
        {{ workout.name }}
      </v-card-title>
      <v-card-subtitle> {{ formatDate(workout.date) }}</v-card-subtitle>
    </div>

    <v-card-text v-if="showDetails">
      <div class="details-header">
        <p>Trainingsdauer: {{ workout.duration }}</p>
      </div>

      <v-data-table
        id="table"
        :headers="tableHeaders"
        :items="tableItems"
        :items-per-page="10"
        class="elevation-1"
      ></v-data-table>
      <v-btn @click="showDetails = false" class="mt-3" block color="lightgrey">
        Details ausblenden
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import moment from "moment";
export default {
  props: ["workout"],
  data() {
    return {
      showDetails: false,
      tableHeaders: [
        { text: "Übung", value: "name", align: "start", sortable: true },
        { text: "Sätze", value: "sets" },
        { text: "Gewicht", value: "weight" }
      ]
    };
  },
  computed: {
    tableItems() {
      const tableItems = this.workout.exercises.map(exercise => ({
        name: exercise.name,
        sets: exercise.sets.filter(set => set !== 0),
        weight: exercise.weight + " Kg"
      }));
      return tableItems;
    }
  },
  methods: {
    formatDate(date) {
      return moment(date)
        .locale("de")
        .calendar();
    }
  }
};
</script>

<style lang="scss">
#table {
  box-shadow: none !important;
}
.v-data-table-header,
.v-data-footer {
  display: none !important;
}
.details-header {
  margin-top: -0.5rem;
  border-top: grey 1px solid;
  padding-top: 1.5rem;
}
</style>
