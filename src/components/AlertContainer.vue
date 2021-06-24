<template>
  <div>
    <Alert
      v-for="alert in alerts"
      :key="alert.id"
      :id="alert.id"
      :color="alert.color"
      :timeout="alert.timeout"
      :message="alert.message"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Alert from "./Alert";
export default {
  components: {
    Alert
  },
  computed: {
    ...mapState("alerts", ["alerts"])
  }
};
</script>
