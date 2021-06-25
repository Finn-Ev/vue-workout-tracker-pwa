<template>
  <div class="plan-details content">
    <h2 class="mt-3 text-center font-weight-regular">
      {{ selectedPlanName }}
    </h2>

    <v-container>
      <v-expansion-panels>
        <v-expansion-panel
          v-for="(workout, idx) in workoutData"
          :key="workout.id"
        >
          <v-expansion-panel-header>
            {{ `${++idx}. ${workout.name.split("(")[0]}` }}
            <!-- remove "(PPL)" or "(OKUK)" -->
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p v-for="exercise in workout.exercises" :key="exercise.name">
              {{ exercise.name }}
            </p>

            <v-btn
              @click="handleSelectWorkout(workout.id)"
              block
              text
              color="success"
              >Dieses Training starten</v-btn
            >
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
    <div class="d-flex justify-center">
      <v-btn
        to="/plans"
        text
        tag="h3"
        class="mt-3 text-center font-weight-regular"
      >
        &#8592;&nbsp;Zu den Plänen
      </v-btn>
    </div>
  </div>
</template>

<script>
import workoutData from "../workout-data/workouts";
import { mapState } from "vuex";
import planData from "../mixins/planData";

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
      return workoutData.filter(
        workout => workout.plan === this.$route.params.selectedPlan
      );
    },
    ...mapState(["workouts"])
  },
  methods: {
    handleSelectWorkout(id) {
      if (this.workouts.ongoingWorkout.isActive) {
        this.$store.dispatch("dialog/setDialog", {
          show: true,
          title: "Achtung",
          text: "Du musst erst das aktive Training beenden oder speichern.",
          textColor: "orange",
          onconfirmMethod: () => {
            this.$router.push("/ongoing");
            this.$store.dispatch("dialog/closeDialog");
          },
          confirmText: "Zum aktiven Training"
        });
      } else {
        if (
          this.workouts.activePlan &&
          this.workouts.activePlan !== this.selectedPlan
        ) {
          this.$store.dispatch("dialog/setDialog", {
            show: true,
            title: "Achtung",
            text: `Du hast bereits ${this.workouts.activePlan} als aktiven Plan`,
            textColor: "orange",
            onconfirmMethod: () => {
              this.$store.dispatch("dialog/closeDialog");
              this.startWorkout(id);
            },
            confirmText: `${this.selectedPlanName} zum aktiven Plan machen und Trainingsverlauf löschen`
          });
        } else {
          this.startWorkout(id);
        }
      }
    },
    startWorkout(id) {
      this.$store.dispatch("workouts/setActivePlan", this.selectedPlan);
      this.$store.dispatch("workouts/clearWorkoutHistory");
      this.$store.dispatch("workouts/mutateOngoingWorkout", {
        isActive: true,
        id,
        startDate: Date.now()
      });
      this.$router.push("/ongoing");
    }
  },
  mixins: [planData]
};
</script>
