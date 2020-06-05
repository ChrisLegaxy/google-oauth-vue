<template>
  <!-- eslint-disable -->
  <div class="d-flex flex-column align-center">
    <!-- <div class="g-signin2" data-onsuccess="onSignIn"></div> -->
    <v-card class="mx-auto" max-width="344">
      <v-img
        src="https://parallelhorizonblog.files.wordpress.com/2019/01/light-archangel-artamiel.png?w=1400"
        height="200px"
      ></v-img>

      <v-card-title> Welcome </v-card-title>

      <v-card-subtitle>
        Expand Below
      </v-card-subtitle>

      <v-card-actions>
        <v-card-subtitle v-if="userData"
          >Yay! What's Up? {{ userData.name }}</v-card-subtitle
        >

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            I'm Chris. I'm a junior fullstack developer 😃 <br />
            I got a long way to go but I'm not stopping <br />
            I took quite sometime developing this demo <br />
            Thanks for passing by, hope this project help you in someway 😉
            Cheers 🙌
          </v-card-text>
          <div class="text-center mb-3">
            <v-btn icon href="https://github.com/ChrisLegaxy" target="_blank">
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </div>
        </div>
      </v-expand-transition>
    </v-card>
    <div class="my-10"></div>
    <GoogleLogin
      :params="params"
      :renderParams="renderParams"
      :onSuccess="onSuccess"
      >Login</GoogleLogin
    >
  </div>
</template>

<script>
/* eslint-disable */
import GoogleLogin from "vue-google-login";
import axios from "axios";

export default {
  data() {
    return {
      // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
      params: {},
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
        theme: "dark",
      },

      show: false,

      userData: "",
    };
  },
  components: {
    GoogleLogin,
  },
  methods: {
    async onSuccess(googleUser) {
      const id_token = googleUser.getAuthResponse().id_token;

      this.userData = await this.forwardTokenToBackend(id_token);
    },
    async forwardTokenToBackend(id_token) {
      const apiUrl = `${process.env.VUE_APP_API_URL}/auth/google`;

      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };

      const response = await axios.post(
        apiUrl,
        {
          idToken: id_token,
        },
        headers
      );

      return response.data;
    },
  },
};
</script>

<style></style>
