<template>
  <v-card class="mx-2 mt-2" @click="showDetails = !showDetails">
    <v-card-title> {{ workout.name }} </v-card-title>
    <v-card-subtitle> {{ formatDate(workout.date) }}</v-card-subtitle>
    <v-card-text v-if="showDetails">
      details
    </v-card-text>
  </v-card>
</template>

<script>
import moment from "moment";
export default {
  props: ["workout"],
  data() {
    return {
      showDetails: false
    };
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

<style lang="scss" scoped></style>
