<template>
  <div class="plan-details">
    <h2 class="text-center mt-3 font-weight-regular">
      {{
        selectedPlan === "ppl" ? "Push Pull Legs" : "Oberkörper / Unterkörper"
      }}
    </h2>

    <v-container>
      <v-expansion-panels>
        <v-expansion-panel v-for="workout in workouts" :key="workout.id">
          <v-expansion-panel-header>
            {{ workout.name.split("(")[0] }}
            <!-- remove "(PPL)" or "(OKUK)" -->
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p v-for="exercise in workout.exercises" :key="exercise.name">
              {{ exercise.name }}
            </p>
            <v-btn @click="setCurrentWorkout(workout.id)" text color="success"
              >Dieses Training starten</v-btn
            >
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
    <Dialog
      :showDialog="showDialog"
      @hideDialog="showDialog = false"
      type="attention"
      title="Achtung"
      text="Bitte beende oder speichere erst das aktive Training"
      :onconfirmMethod="onDialogConfirm"
    />
  </div>
</template>

<script>
import workouts from "../workout-data/workouts";
import Dialog from "../components/Dialog";
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
    selectedPlan() {
      return this.$route.params.selectedPlan;
    },
    workouts() {
      return workouts.filter(workout => workout.plan === this.selectedPlan);
    }
  },
  methods: {
    setCurrentWorkout(id) {
      if (localStorage.getItem("ongoingWorkout")) {
        this.showDialog = true;
      } else {
        localStorage.setItem(
          "ongoingWorkout",
          JSON.stringify({ id, startDate: Date.now() })
        );
        this.$router.push("/ongoing");
      }
    },
    onDialogConfirm() {
      this.$router.push("/ongoing");
    }
  }
};
</script>

<style lang="scss" scoped></style>
