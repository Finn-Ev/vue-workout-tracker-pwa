<template>
  <v-bottom-navigation v-if="deviceWidth < 1000">
    <v-btn to="/">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn to="/plans">
      <span>Pläne</span>

      <v-icon>mdi-format-list-bulleted</v-icon>
    </v-btn>

    <v-btn to="/ongoing">
      <span>Aktiv</span>
      <v-icon>mdi-dumbbell</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  props: ["deviceWidth"]
};
</script>

<style lang="scss" scoped></style>
