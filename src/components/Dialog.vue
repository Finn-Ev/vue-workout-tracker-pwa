<template>
  <div class="text-center">
    <v-dialog v-model="showDialog" width="500" persistent>
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
          <v-btn color="primary" to="/ongoing" text>
            Zum aktiven Training
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["showDialog", "title", "text"]
};
</script>

<style lang="scss" scoped></style>
