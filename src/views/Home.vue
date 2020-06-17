<template>
  <div class="home">
    <h2 class="text-center font-weight-regular mt-3">Workout-App</h2>
    <v-card class=" my-3 pt-3">
      <p class="px-2 text-center font-weight-light">
        Diese App bietet aktuell zwei verschiedene Trainingspläne. Die
        Reihenfolge und Frequenz der Trainingseinheiten können beliebig gewählt
        werden. Es wird jedoch zu jedem Plan ein sinnvoller möglicher Wochenplan
        angezeigt. <br />
        <br />
        Sinnvoll ist es nicht andauernd zwischen den Plänen zu wechseln sondern
        sich konstant von Training zu Training eines Plans zu steigern.
      </p>
      <v-btn to="/plans" block>Zu den Plänen</v-btn>
    </v-card>
    <h3 class="text-center font-weight-regular my-3">
      Häufig gestellte Fragen
    </h3>

    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header
          >Was bedeutet PPL und OKUK?</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          Beides sind Abkürzungen für Trainingsplits, d.h. in welche Bereiche
          man den Körper unterteilt um nicht jedes Training den ganzen Körper zu
          belasten. PPL bedeutet Push (Drückbewegungen), Pull (Zugbewegungen)
          und Legs (Beine).
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="mt-2">
        <v-expansion-panel-header
          >Was ist mit "Intervall gemeint?"</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          Die Angabe des Intervalls bestimmt mit welcher Geschwindigkeit eine
          Übung ausgeführt wird. Das Intervall 2/1/1/1 beim Bankdrücken bedeutet
          beispielsweise, dass das Gewicht für 2 Sekunden gesenkt wird, dann für
          eine 1 Sekunde unten statisch gehalten wird und anschließend der Weg
          zur Ausgangsposition, in diesem Fall das Wegdrücken der Gewichts, eine
          Sekunde betragen sollte. Die vierte Zeitangabe beschreibt wie lange
          (in diesem Fall 1 Sekunde) das Gewicht in der Ausgangsposition
          statisch gehalten werden soll.
          <br />
          Intervalle helfen einem die Bewegung kontrollierter und konstant
          durchzuführen.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
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
</style>
