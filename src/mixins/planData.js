import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["workouts"]),
    activePlanUrl() {
      return `/plans/${this.workouts.activePlan}`;
    },
    activePlanName() {
      let name;
      switch (this.workouts.activePlan) {
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
    }
  },
  methods: {
    isActivePlan(planId) {
      return this.workouts.activePlan === planId;
    }
  }
};
