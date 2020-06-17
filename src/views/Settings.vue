<template>
  <div class="responsive">
    <h2 class="text-center font-weight-regular my-3">Einstellungen</h2>
    <v-card class="mx-2">
      <v-card-text>
        <p>Aktives Theme: {{ darkTheme ? "Dunkel" : "Hell" }}</p>
        <v-btn block class="mb-4" color="darkgrey" @click="toggleTheme"
          >Theme wechseln</v-btn
        >
        <v-divider></v-divider>
        <p class="mt-4">
          Gespeicherte Trainingseinheiten: {{ savedWorkouts.length }}
        </p>
        <v-btn block class="mb-2" color="darkgrey" @click="showDialog = true"
          >Verlauf löschen</v-btn
        >
        <Dialog
          :showDialog="showDialog"
          @hideDialog="showDialog = false"
          title="Achtung"
          textColor="red"
          confirmText="Verlauf löschen"
          text="Willst du den Trainingsverlauf wirklich löschen?"
          :onconfirmMethod="clearHistory"
        />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import Dialog from "../components/shared/Dialog";
export default {
  components: {
    Dialog
  },
  data() {
    return {
      showDialog: false
    };
  },
  computed: {
    savedWorkouts() {
      return this.$store.getters.savedWorkouts;
    },
    darkTheme() {
      return this.$vuetify.theme.dark;
    }
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem(
        "theme",
        JSON.stringify({ dark: this.$vuetify.theme.dark })
      );
    },
    clearHistory() {
      this.$store.dispatch("clearWorkoutHistory");
      window.location.reload();
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
// button {
//   border: lightgrey solid 1px;
//   padding: 5px;
//   border-radius: 5px;
// }
</style>
