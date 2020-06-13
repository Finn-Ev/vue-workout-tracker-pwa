<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500" persistent>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          {{ title }}
        </v-card-title>

        <v-card-text>
          {{ text }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <div class="buttons">
            <v-btn color="primary" text @click="onconfirmMethod">
              {{ buttonText.confirm }}
            </v-btn>
            <v-btn color="primary" text @click="hideDialog">
              {{ buttonText.cancel }}
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["type", "showDialog", "title", "text", "onconfirmMethod"],

  computed: {
    buttonText() {
      if (this.type == "save") {
        return { confirm: " Speichern", cancel: " Fortsetzen" };
      } else if (this.type == "cancel") {
        return { confirm: " Abbrechen", cancel: " Fortsetzen" };
      } else {
        return { confirm: "Zum aktiven ", cancel: "Schließen" };
      }
    },
    dialog() {
      return this.showDialog;
    }
  },
  methods: {
    hideDialog() {
      this.$emit("hideDialog");
    }
  }
};
</script>

<style lang="scss" scoped></style>
