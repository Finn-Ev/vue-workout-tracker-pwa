<template>
  <div class="content">
    <h2 class="text-center font-weight-regular my-4">Einstellungen</h2>
    <v-card class="mx-2">
      <v-card-text>
        <p>Aktives Theme: {{ darkTheme ? "Dunkel" : "Hell" }}</p>
        <v-btn block class="mb-4" color="darkgrey" @click="toggleTheme"
          >Theme wechseln
        </v-btn>
        <v-divider />
        <p class="mt-4">
          Gespeicherte Trainingseinheiten: {{ savedWorkouts.length }}
        </p>

        <v-btn
          block
          class="mb-2"
          color="darkgrey"
          @click="handleResetAppRequest"
          >Trainingsdaten löschen</v-btn
        >
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      requestResetWorkoutStateCount: 0
    };
  },
  computed: {
    darkTheme() {
      return this.$vuetify.theme.dark;
    },
    ...mapState({
      savedWorkouts: state => state.workouts.savedWorkouts
    })
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem(
        "theme",
        JSON.stringify({ dark: this.$vuetify.theme.dark })
      );
    },
    handleResetAppRequest() {
      this.$store.dispatch("dialog/setDialog", {
        show: true,
        title: "Achtung",
        text:
          "Möchtest du wirklich sämtliche gespeicherten Trainingsdaten löschen?",
        textColor: "red",
        onconfirmMethod: this.resetWorkoutStateApp,
        confirmText: `Alles löschen`
      });
    },
    resetWorkoutStateApp() {
      this.requestResetWorkoutStateCount++;

      // user has to click the reset button 2 times (safer)
      if (this.requestResetWorkoutStateCount > 1) {
        this.$store.dispatch("workouts/clearWorkoutState");
        this.$store.dispatch("dialog/closeDialog");
        this.$router.push("/");
      }
    },
    setDialogValues({ ...dialogData }) {
      this.$store.dispatch("dialog/setDialog", dialogData);
    },
    clearHistory() {
      this.$store.dispatch("workouts/clearWorkoutHistory");
      this.$store.dispatch("dialog/closeDialog");
    }
  }
};
</script>

<style lang="scss" scoped>
p,
button {
  font-size: 1rem;
  font-weight: 400 !important;
}
</style>
