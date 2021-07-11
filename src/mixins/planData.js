import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["workouts"]),
    activePlanUrl() {
      return `/plans/${this.workouts.activePlan}`;
    },
    activePlanName() {
      return this.getPlanName(this.workouts.activePlan);
    },
    selectedPlanName() {
      return this.getPlanName(this.$route.params.selectedPlan);
    }
  },
  methods: {
    isActivePlan(planId) {
      return this.workouts.activePlan === planId;
    },
    getPlanName(planId) {
      let name;
      switch (planId) {
        case "ppl":
          name = "Push Pull Legs";
          break;
        case "okuk":
          name = "Oberkörper / Unterkörper";
          break;
        case "bw1":
          name = "Bodyweight Level 1";
          break;
        case "bw2":
          name = "Bodyweight Level 2";
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
    }
  }
};
