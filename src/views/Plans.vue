<template>
  <div class="plans content" style="maxWidth: 800px">
    <h2 class="mt-4 text-center font-weight-regular">
      Verfügbare Trainingspläne
    </h2>
    <v-container>
      <v-row>
        <!-- <PlanPreview
          title="Planche"
          description="2 Planche Einheiten pro Woche"
          url="planche"
        />
        <PlanPreview
          title="Front Lever"
          description="2 Front-Lever Einheiten pro Woche. "
          url="front-lever"
        /> -->
        <plan-preview
          title="Push Pull Legs"
          description="6 Einheiten pro Woche"
          url="ppl"
        />
        <plan-preview
          title="Oberkörper / Unterkörper"
          description="4 Einheiten pro Woche"
          url="okuk"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PlanPreview from "../components/PlanPreview";
export default {
  data() {
    return {};
  },
  components: {
    PlanPreview
  }
};
</script>

<style lang="scss" scoped></style>
