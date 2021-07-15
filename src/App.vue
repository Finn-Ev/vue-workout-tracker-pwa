<template>
  <v-app>
    <alert-container />
    <Dialog />
    <v-content>
      <router-view />
    </v-content>
    <bottom-navbar />
  </v-app>
</template>

<script>
import BottomNavbar from "./components/BottomNavbar";
import AlertContainer from "./components/AlertContainer";
import Dialog from "./components/Dialog";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    BottomNavbar,
    AlertContainer,
    Dialog
  },
  data: () => ({}),
  mounted() {
    this.setBodyBackground();
    this.redirect();
  },
  methods: {
    setBodyBackground() {
      if (JSON.parse(localStorage.getItem("theme"))?.dark) {
        document.querySelector("body").style.background = "#121212";
      }
    },
    redirect() {
      if (this.hasActiveWorkout) {
        this.$router.push("/ongoing");
      }
    }
  },
  computed: {
    ...mapState({
      hasActiveWorkout: state => state.workouts.ongoingWorkout.isActive
    })
  }
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

// remove number-input arrows
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
