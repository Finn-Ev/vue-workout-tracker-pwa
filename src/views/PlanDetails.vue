<template>
  <div class="plan-details responsive">
    <h2 class="mt-3 text-center font-weight-regular">
      {{
        selectedPlan === "ppl" ? "Push Pull Legs" : "Oberkörper / Unterkörper"
      }}
    </h2>

    <v-container>
      <v-expansion-panels>
        <v-expansion-panel v-for="workout in workoutData" :key="workout.id">
          <v-expansion-panel-header>
            {{ workout.name.split("(")[0] }}
            <!-- remove "(PPL)" or "(OKUK)" -->
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p v-for="exercise in workout.exercises" :key="exercise.name">
              {{ exercise.name }}
            </p>

            <v-btn
              @click="setCurrentWorkout(workout.id)"
              block
              text
              color="success"
              >Dieses Training starten</v-btn
            >
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
    <!-- <Dialog
      :showDialog="showDialog"
      @hideDialog="showDialog = false"
      confirmText="Zum aktiven Training"
      title="Achtung"
      textColor="orange"
      text="Bitte beende oder speichere erst das aktive Training"
      :onconfirmMethod="onDialogConfirm"
    /> -->
  </div>
</template>

<script>
import workoutData from "../workout-data/workouts";
import { mapState } from "vuex";

export default {
  components: {},
  data() {
    return {
      showDialog: false
    };
  },
  computed: {
    selectedPlan() {
      return this.$route.params.selectedPlan;
    },
    workoutData() {
      return workoutData.filter(workout => workout.plan === this.selectedPlan);
    },
    ...mapState(["workouts"])
  },
  methods: {
    setCurrentWorkout(id) {
      if (this.workouts.ongoingWorkout.isActive) {
        this.$store.dispatch("dialog/setDialog", {
          show: true,
          title: "Achtung",
          text: "Du musst erst das aktive Training beenden oder speichern.",
          textColor: "orange",
          onconfirmMethod: this.onDialogConfirm,
          confirmText: "Zum aktiven Training"
        });
      } else {
        this.$store.dispatch("workouts/mutateOngoingWorkout", {
          isActive: true,
          id,
          startDate: Date.now()
        });

        this.$router.push("/ongoing");
      }
    },
    onDialogConfirm() {
      this.$router.push("/ongoing");
      this.$store.dispatch("dialog/closeDialog");
    }
  }
};
</script>

<style lang="scss" scoped></style>
