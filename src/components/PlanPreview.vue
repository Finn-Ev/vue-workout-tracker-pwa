<template>
  <v-col cols="12" md="6" lg="6">
    <v-card class="mx-auto ">
      <v-card-title
        >{{ title }} {{ isActivePlan(planId) ? "(Aktiv)" : "" }}</v-card-title
      >
      <v-card-text>{{ description }}</v-card-text>
      <v-card-actions>
        <v-btn color="darkgrey" block :to="`/plans/${planId}`">Zum Plan</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import planDataMixin from "../mixins/planData";
export default {
  props: ["title", "description", "plan-id"],
  mixins: [planDataMixin]
};
</script>

<style lang="scss" scoped></style>
