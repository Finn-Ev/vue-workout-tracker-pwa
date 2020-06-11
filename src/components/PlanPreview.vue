<template>
  <v-col cols="12" md="6" lg="6">
    <v-card class="mx-auto ">
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>{{ description }}</v-card-text>
      <v-card-actions>
        <v-btn class="text-transform-none" text :to="`plans/${url}`"
          >Zum Plan</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["title", "description", "url"]
};
</script>

<style lang="scss" scoped></style>
