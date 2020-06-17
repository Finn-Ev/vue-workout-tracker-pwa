<template>
  <v-card class="mx-2 my-2">
    <div @click="showDetails = !showDetails" class="card-header">
      <div>
        <v-card-title>
          {{ workout.name }}
        </v-card-title>
        <v-card-subtitle> {{ formatDate(workout.date) }}</v-card-subtitle>
      </div>
      <v-icon :class="showDetails ? 'rotate' : ''">mdi-chevron-down</v-icon>
      <!-- <v-icon v-else>mdi-chevron-down</v-icon> -->
    </div>

    <v-card-text v-if="showDetails">
      <v-divider></v-divider>
      <div class="mt-5">
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
        { text: "Übung", value: "name", align: "start", sortable: false },
        { text: "Sätze", value: "sets" },
        { text: "Gewicht", value: "weight" }
      ]
    };
  },
  computed: {
    tableItems() {
      const tableItems = this.workout.exercises.map(exercise => ({
        name: exercise.name,
        sets: exercise.sets.toString().replace(/,/g, "/"),
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

  padding-top: 1.5rem;
}
.card-header {
  display: flex;
  justify-content: space-between;
  width: 94%;
}

.rotate {
  transition: 0.3s ease-in all;
  transform: rotate(180deg);
}
</style>
