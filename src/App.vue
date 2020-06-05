<template>
  <v-app>
    <v-container style="height: 100%">
      <v-row style="height: 100%" align="center" justify="center">
        <v-col class="d-flex justify-center align-center">
          <GoogleButton />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import GoogleButton from "./components/GoogleButton";

export default {
  name: "App",
  components: {
    GoogleButton,
  },
};
</script>
