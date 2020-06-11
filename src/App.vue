<template>
  <v-app>
    <Navbar :deviceWidth="deviceWidth" />
    <v-content>
      <router-view />
    </v-content>
    <BottomNavbar :deviceWidth="deviceWidth" />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import BottomNavbar from "./components/BottomNavbar";
export default {
  name: "App",
  components: {
    Navbar,
    BottomNavbar
  },
  data: () => ({
    //
  }),
  computed: {
    deviceWidth() {
      return window.innerWidth;
    }
  }
};
</script>
