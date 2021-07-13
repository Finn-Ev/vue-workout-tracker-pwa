<template>
  <v-card class="my-3 mx-2">
    <v-card-title @click="edit = !edit"
      >{{ idx + 1 }}. {{ exercise.name }}

      <v-spacer />
      <v-icon color="success" v-if="hasBeenSaved">{{ "mdi-check" }}</v-icon>
    </v-card-title>
    <div v-if="!hasBeenSaved || edit">
      <v-card-subtitle>
        <div>Wiederholungen: {{ exercise.sets }} x {{ exercise.reps }}</div>
        <div>Pause: {{ exercise.pause }} min.</div>
        <div v-if="exercise.intervall">Intervall: {{ exercise.intervall }}</div>
      </v-card-subtitle>

      <v-card-text v-if="lastTrainingStats">
        <h4>Stats vom letzten Training:</h4>
        <div>
          Genutztes Gewicht:
          {{
            lastTrainingStats.weight.includes("null")
              ? "0 Kg"
              : lastTrainingStats.weight
          }}
        </div>
        <div>
          Wiederholungen:
          {{ lastTrainingStats.sets.toString().replace(/,/g, "/") }}
        </div>
        <div class="mt-3" v-if="lastTrainingStats.notes">
          <h4>Notizen vom letzten Training:</h4>
          <div>{{ lastTrainingStats.notes }}</div>
        </div>
      </v-card-text>

      <v-card-text>
        <v-text-field
          v-if="!exercise.bodyweight"
          v-model="weight"
          aria-autocomplete="false"
          type="number"
          min="0"
          max="99"
          step="1"
          pattern="\d*"
          label="Genutztes Gewicht in Kg"
        />
        <h3 class="mb-0 font-weight-light">Sätze</h3>
        <div class="d-flex justify-space-between">
          <div class="d-flex flex-wrap">
            <v-btn
              v-for="n in exercise.sets"
              :key="n"
              class="mr-2 my-1 px-0"
              :class="{ 'mt-3': n > 4 && isMobile }"
            >
              <input
                type="number"
                min="0"
                max="99"
                placeholder="0"
                pattern="\d*"
                class="rep-input text-center"
                v-model="sets[n - 1]"
              />
            </v-btn>
          </div>
          <v-icon
            class="notes-icon"
            style="touch-action: manipulation;"
            @click="showNotesTextField = !showNotesTextField"
          >
            mdi-text
          </v-icon>
        </div>

        <v-text-field
          aria-autocomplete="false"
          v-if="showNotesTextField"
          type="text"
          class="mt-5 textarea"
          label="Notiz fürs nächste Training"
          v-model="notes"
        ></v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-btn
          @click="
            saveExercise({
              name: exercise.name,
              sets,
              weight: weight ? weight : null,
              notes: notes ? notes : ''
            })
          "
          style="touch-action: manipulation"
          text
          block
          tag="div"
          color="success"
          >{{ hasBeenSaved ? "Bestätigen" : "Übung speichern" }}
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["exercise", "idx", "savedExerciseData"],
  data() {
    return {
      sets: [],
      weight: null,
      notes: "",
      showNotesTextField: false,
      edit: false,
      hasBeenSaved: false
    };
  },
  mounted() {
    if (this.exerciseAlreadySaved()) {
      const [exercise] = this.ongoingWorkout.exercises.filter(
        exercise => exercise.name === this.exercise.name
      );
      this.weight = exercise.weight;
      this.sets = exercise.sets;
      this.notes = exercise.notes;
    }
  },
  computed: {
    lastTrainingStats() {
      const [lastTrainingValues] = this.savedExerciseData.filter(
        exercise => exercise.name === this.exercise.name
      );

      if (lastTrainingValues) {
        return {
          weight: lastTrainingValues.weight + " Kg",
          sets: lastTrainingValues.sets,
          notes: lastTrainingValues.notes
        };
      }
      return null;
    },
    isMobile() {
      return window.innerWidth < 432;
    },
    ...mapState("workouts", ["ongoingWorkout"])
  },

  methods: {
    // check if the exercise with this name was saved already during the workout
    exerciseAlreadySaved() {
      this.hasBeenSaved = this.ongoingWorkout.exercises.some(
        exercise => exercise.name === this.exercise.name
      );
      return this.hasBeenSaved;
    },

    saveExercise(exerciseToSave) {
      if (!exerciseToSave.sets.length)
        return this.$store.dispatch("alerts/setAlert", {
          message: `Du musst mindestens einen Satz abschließen um eine Übung speichern zu können`,
          color: "orange",
          timeout: 3000
        });
      if (!this.exerciseAlreadySaved()) {
        this.$store.dispatch("workouts/saveExercises", [
          ...this.ongoingWorkout.exercises,
          exerciseToSave
        ]);
      } else {
        const filteredExercises = this.ongoingWorkout.exercises.filter(
          exercise => exercise.name !== exerciseToSave.name // delete the current version of the exercise
        );

        // set each set that hasnt been completed to zero reps instead of null
        exerciseToSave.sets = exerciseToSave.sets.map(set => {
          if (!set) {
            set = 0;
          }
          return set;
        });

        this.$store.dispatch("workouts/saveExercises", [
          ...filteredExercises,
          exerciseToSave // save the new version of the exercise
        ]);
      }

      this.hasBeenSaved = true;
      this.edit = false;
    }
  }
};
</script>

<style lang="scss">
.v-btn {
  cursor: pointer !important;
}
.mdi-text::after {
  background-color: rgba($color: #000, $alpha: 0) !important;
}
.rep-input {
  width: 100% !important;
  font-size: 16px !important;
  padding: 0 !important;
}
</style>
