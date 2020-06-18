<template>
  <div class="text-center">
    <v-dialog v-model="dialog.show" width="500" persistent v-if="dialog.show">
      <v-card>
        <v-card-title class="" primary-title>
          {{ dialog.title }}
        </v-card-title>

        <v-card-text class="mt-3">
          {{ dialog.text }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn :color="dialog.textColor" text @click="dialog.onconfirmMethod">
            {{ dialog.confirmText }}
          </v-btn>
          <v-btn class="text--white" text @click="closeDialog">
            Schließen
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("dialog", ["dialog"])
  },
  methods: {
    closeDialog() {
      this.$store.dispatch("dialog/closeDialog");
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
