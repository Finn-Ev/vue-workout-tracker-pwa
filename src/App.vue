<template>
  <v-app>
    <AlertContainer />
    <Dialog />
    <v-content>
      <router-view />
    </v-content>
    <BottomNavbar />
  </v-app>
</template>

<script>
import BottomNavbar from "./components/layout/BottomNavbar";
import AlertContainer from "./components/layout/AlertContainer";
import Dialog from "./components/layout/Dialog";
export default {
  name: "App",
  components: {
    BottomNavbar,
    AlertContainer,
    Dialog
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
