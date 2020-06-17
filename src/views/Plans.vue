<template>
  <div class="plans responsive" style="maxWidth: 800px">
    <h2 class="mt-3 text-center font-weight-regular">
      Verfügbare Trainingspläne
    </h2>
    <v-container>
      <v-row>
        <PlanPreview
          title="Push Pull Legs"
          description="6 Einheiten pro Woche"
          url="ppl"
        />
        <PlanPreview
          title="Oberkörper / Unterkörper"
          description="4 Einheiten pro Woche"
          url="okuk"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PlanPreview from "../components/other/PlanPreview";
export default {
  data() {
    return {
      //
    };
  },
  components: {
    PlanPreview
  }
};
</script>

<style lang="scss" scoped></style>
