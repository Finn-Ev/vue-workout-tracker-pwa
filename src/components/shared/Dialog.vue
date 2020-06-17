<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500" persistent>
      <v-card>
        <v-card-title class="" primary-title>
          {{ title }}
        </v-card-title>

        <v-card-text class="mt-3">
          {{ text }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn :color="textColor" text @click="onconfirmMethod">
            {{ confirmText }}
          </v-btn>
          <v-btn class="text--white" text @click="hideDialog">
            Schließen
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    showDialog: Boolean,
    title: String,
    textColor: String,
    text: String,
    onconfirmMethod: Function,
    confirmText: String
  },

  computed: {
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
