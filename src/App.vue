<template>
  <v-app>
    <AlertContainer />
    <Dialog />
    <v-content>
      <router-view />
    </v-content>
    <BottomNavbar />
    <!-- <Timer /> -->
  </v-app>
</template>

<script>
import BottomNavbar from "./components/BottomNavbar";
import AlertContainer from "./components/AlertContainer";
import Dialog from "./components/Dialog";
export default {
  name: "App",
  components: {
    BottomNavbar,
    AlertContainer,
    Dialog
  },
  data: () => ({}),
  computed: {}
};
</script>
<style lang="scss">
.buttons {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.v-ripple__container {
  display: none; // disable ripple
}

.v-btn__content {
  text-transform: none;
  font-size: 1rem;
}

.content {
  max-width: 600px;
  margin: auto;
}
</style>
