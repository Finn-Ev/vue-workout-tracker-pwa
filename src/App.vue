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
import BottomNavbar from "./components/layout/BottomNavbar";
import AlertContainer from "./components/utils/AlertContainer";
import Dialog from "./components/utils/Dialog";
// import Timer from "./components/other/Timer";
export default {
  name: "App",
  components: {
    BottomNavbar,
    AlertContainer,
    Dialog
    // Timer
  },
  data: () => ({
    //
  }),
  computed: {}
};
</script>
<style lang="scss">
.buttons {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.responsive {
  max-width: 600px;
  margin: auto;
}
</style>
