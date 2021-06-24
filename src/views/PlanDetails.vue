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
    selectedPlanName() {
      let name;
      switch (this.$route.params.selectedPlan) {
        case "ppl":
          name = "Push Pull Legs";
          break;
        case "okuk":
          name = "Oberkörper / Unterkörper";
          break;
        case "planche":
          name = "Planche";
          break;
        case "front-lever":
          name = "Front Lever";
          break;
        default:
          break;
      }

      return name;
    },
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
