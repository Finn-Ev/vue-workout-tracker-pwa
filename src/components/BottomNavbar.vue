<template>
  <div>
    <v-bottom-navigation app>
      <div class="bottom-nav" :class="{ 'pb-4 ': isiPhone }">
        <v-btn tag="div" to="/">
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn tag="div" v-if="!activeWorkout" to="/plans">
          <v-icon>mdi-format-list-bulleted</v-icon>
        </v-btn>

        <v-btn tag="div" v-if="!activeWorkout" to="/history">
          <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn tag="div" to="/settings">
          <v-icon>mdi-cog-outline</v-icon>
        </v-btn>

        <v-btn tag="div" v-if="activeWorkout" to="/ongoing">
          <v-icon>mdi-dumbbell</v-icon>
        </v-btn>
      </div>
    </v-bottom-navigation>
  </div>
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
  computed: {
    isiPhone() {
      return navigator.platform.includes("iPhone");
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

<style lang="scss" scoped>
.v-icon.v-icon {
  font-size: 38px !important;
}
.v-bottom-navigation {
  height: 70px !important;
}
.bottom-nav {
  display: flex;
  width: 100% !important;
  max-width: 600px !important;
  align-items: center !important;
  justify-content: space-around !important;

  .v-btn::before {
    background-color: transparent;
  }
}
</style>
