<template>
  <v-snackbar v-model="showAlert" :color="color" top>
    {{ message }}
  </v-snackbar>
</template>

<script>
export default {
  props: {
    color: String,
    timeout: {
      type: Number,
      default: 3500
    },
    message: String,
    id: Number
  },
  data() {
    return {
      showAlert: true
    };
  },
  created() {
    setTimeout(() => {
      this.$store.dispatch("alerts/removeAlert", this.id);
    }, this.timeout);
  }
};
</script>

<style lang="scss" scoped></style>
