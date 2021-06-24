<template>
  <div class="home content">
    <h2 class="text-center font-weight-regular mt-3">Workout-App</h2>
    <v-card class=" my-3 py-3">
      <p class="px-2 text-center font-weight-light">
        Diese App bietet aktuell vier verschiedene Trainingspläne. Die
        Reihenfolge und Frequenz der Trainingseinheiten können beliebig gewählt
        werden. Es wird jedoch zu jedem Plan ein sinnvoller möglicher Wochenplan
        angezeigt. <br />
        Sinnvoll ist es, nicht andauernd zwischen den Plänen zu wechseln sondern
        sich konstant von Training zu Training eines Plans zu steigern.
      </p>
      <v-btn class="plan-button" to="/plans">Zu den Plänen</v-btn>
    </v-card>
    <template>
      <div>
        <h3 class="text-center font-weight-regular my-3">
          Häufig gestellte Fragen
        </h3>
        <v-expansion-panels class="mb-4">
          <v-expansion-panel>
            <v-expansion-panel-header
              >Wie installiere ich die App auf meinem
              Handy?</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              Im unteren Bereich des Bildschirm sollte in den meisten Fällen
              eine Info-Meldung auftauchen "Workout-App zum Startbildschirm
              hinzufügen". Wenn sie auf diese Meldung klicken, können sie die
              App installieren. Falls diese Meldung nicht auftaucht, können sie
              das Menü des Browsers öffnen (meistens oben rechts) und dort auf
              "Zum Startbildschirm hinzufügen" klicken. Auf iOS nur im Safari
              verfügbar.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="mt-1">
            <v-expansion-panel-header
              >Was bedeuten PPL und OKUK?</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              Beides sind Abkürzungen für Trainingsplits, d.h. in welche
              Bereiche man den Körper unterteilt um nicht jedes Training den
              ganzen Körper zu belasten. PPL bedeutet Push (Drückbewegungen),
              Pull (Zugbewegungen) und Legs (Beine).
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="mt-1">
            <v-expansion-panel-header
              >Was ist mit "Intervall" gemeint?</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              Die Angabe des Intervalls bestimmt mit welcher Geschwindigkeit
              eine Übung ausgeführt wird. Das Intervall 2/1/1/1 beim Bankdrücken
              bedeutet beispielsweise, dass das Gewicht für 2 Sekunden gesenkt
              wird, dann für eine 1 Sekunde unten statisch gehalten wird und
              anschließend der Weg zur Ausgangsposition, in diesem Fall das
              Wegdrücken der Gewichts, eine Sekunde betragen sollte. Die vierte
              Zeitangabe beschreibt wie lange (in diesem Fall 1 Sekunde) das
              Gewicht in der Ausgangsposition statisch gehalten werden soll.
              Intervalle helfen einem die Bewegung kontrollierter und konstant
              durchzuführen.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  components: {},
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
