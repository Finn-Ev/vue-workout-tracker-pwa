<template>
  <div>
    <v-app-bar v-if="deviceWidth >= 1000" app color="primary" dark>
      <v-toolbar-title>Train-App</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: ["deviceWidth"]
};
</script>

<style lang="scss" scoped></style>
