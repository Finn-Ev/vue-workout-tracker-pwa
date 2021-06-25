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
  mounted() {
    if (JSON.parse(localStorage.getItem("theme"))?.dark) {
      document.querySelector("body").style.background = "#121212";
    }
  },
  computed: {}
};
</script>
<style lang="scss">
.w-100 {
  width: 100%;
}
.h-100 {
  height: 100%;
}
.vh-100 {
  height: 100vh;
}
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
.v-btn--active::before {
  opacity: 0 !important;
}
</style>
