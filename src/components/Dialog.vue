<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500" persistent>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          {{ title }}
        </v-card-title>

        <v-card-text class="mt-3">
          {{ text }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn color="primary" text @click="onconfirmMethod">
            {{ buttonText.confirm }}
          </v-btn>
          <v-btn color="primary" text @click="hideDialog">
            {{ buttonText.cancel }}
          </v-btn>
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
        return { confirm: "Speichern & beenden", cancel: "Schließen" };
      } else if (this.type == "cancel") {
        return { confirm: "Training abbrechen", cancel: "Schließen" };
      } else {
        return { confirm: "Zum aktiven Training ", cancel: "Schließen" };
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

<style lang="scss" scoped>
.v-card__actions {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
