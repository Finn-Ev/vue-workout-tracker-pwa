<template>
  <v-bottom-navigation app v-if="deviceWidth < 1000">
    <v-btn to="/">
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn v-if="!activeWorkout" to="/plans">
      <v-icon>mdi-format-list-bulleted</v-icon>
    </v-btn>

    <v-btn to="/history">
      <v-icon>mdi-history</v-icon>
    </v-btn>
    <v-btn to="/settings">
      <v-icon>mdi-cog-outline</v-icon>
    </v-btn>
    <v-btn v-if="activeWorkout" to="/ongoing">
      <v-icon>mdi-dumbbell</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      activeWorkout: false
    };
  },
  props: ["deviceWidth"],

  methods: {
    checkActiveWorkout: function() {
      this.activeWorkout = !!localStorage.getItem("ongoingWorkout");
    }
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        this.checkActiveWorkout();
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
