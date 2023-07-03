<template>
  <div>
    <v-bottom-navigation app>
      <div class="bottom-nav">
        <v-btn tag="div" to="/">
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn tag="div" v-if="!activeWorkout" to="/plans">
          <v-icon>mdi-format-list-bulleted</v-icon>
        </v-btn>

        <v-btn
          tag="div"
          v-if="!activeWorkout && hasWorkoutHistory"
          to="/history"
        >
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
import { mapState } from "vuex";
export default {
  data() {
    return {
      activeWorkout: false
    };
  },

  methods: {
    checkActiveWorkout() {
      this.activeWorkout = this.workouts.ongoingWorkout.isActive;
    }
  },
  computed: {
    ...mapState(["workouts"]),
    isiPhone() {
      return navigator.platform.includes("iPhone");
    },
    hasWorkoutHistory() {
      return this.workouts.savedWorkouts.length;
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
.v-btn {
  background: transparent !important;
}
.v-icon.v-icon {
  font-size: 38px;
}

.bottom-nav {
  display: flex;
  width: 100%;
  max-width: 600px;
  align-items: center;
  justify-content: space-around;

  .v-btn::before {
    background-color: transparent;
  }
}
</style>
