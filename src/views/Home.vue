<template>
  <div class="home responsive">
    <h2 class="text-center font-weight-regular mt-3">Workout-App</h2>
    <v-card class=" my-3 py-3">
      <p class="px-2 text-center font-weight-light">
        Diese App bietet aktuell zwei verschiedene Trainingspläne. Die
        Reihenfolge und Frequenz der Trainingseinheiten können beliebig gewählt
        werden.
        <!-- Es wird jedoch zu jedem Plan ein sinnvoller möglicher Wochenplan
        angezeigt.  -->
        <br />
        <br />
        Sinnvoll ist es nicht andauernd zwischen den Plänen zu wechseln sondern
        sich konstant von Training zu Training eines Plans zu steigern.
      </p>
      <v-btn class="plan-button" to="/plans">Zu den Plänen</v-btn>
    </v-card>
    <FAQ />
  </div>
</template>

<script>
import FAQ from "../components/other/FAQ";
export default {
  components: {
    FAQ
  },
  name: "Home"
};
</script>
<style lang="scss">
.home {
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.plan-button {
  width: 95% !important;
  margin: 0 2.5%;
}
</style>
