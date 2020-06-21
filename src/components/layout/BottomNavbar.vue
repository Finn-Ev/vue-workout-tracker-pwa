<template>
  <v-bottom-navigation app style="alignItems: center">
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

  methods: {
    checkActiveWorkout() {
      this.activeWorkout = this.$store.state.workouts.ongoingWorkout.isActive;
    }
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        this.checkActiveWorkout();
      }
    }
  },
  created() {
    this.checkActiveWorkout();
  }
};
</script>

<style lang="scss" scoped></style>
