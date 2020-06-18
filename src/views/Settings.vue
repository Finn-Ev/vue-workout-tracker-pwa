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
        <v-btn
          block
          class="mb-2"
          color="darkgrey"
          :disabled="!savedWorkouts.length"
          @click="
            setDialogValues({
              show: true,
              title: 'Achtung',
              text: 'Willst du deinen Trainingsverlauf wirklich löschen?',
              textColor: 'red',
              onconfirmMethod: clearHistory,
              confirmText: 'Verlauf löschen'
            })
          "
          >Verlauf löschen</v-btn
        >
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
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
// button {
//   border: lightgrey solid 1px;
//   padding: 5px;
//   border-radius: 5px;
// }
</style>
