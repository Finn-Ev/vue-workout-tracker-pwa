<template>
  <v-snackbar v-model="showAlert" :color="color" top>
    {{ message }}
  </v-snackbar>
</template>

<script>
export default {
  props: {
    showAlert: Boolean,
    color: String,
    timeout: Number,
    message: String
  },
  watch: {
    showAlert: function() {
      setTimeout(() => {
        this.$emit("closeAlert");
      }, this.timeout);
    }
  }
};
</script>

<style lang="scss" scoped></style>
