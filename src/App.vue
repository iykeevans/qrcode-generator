<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">BFree Test</div>

      <v-spacer></v-spacer>

      <v-btn
        text
        @click="$router.push('/qrcodes')"
        v-if="!$route.path.includes('qrcodes')"
      >
        <span class="mr-2">See All QRcodes</span>
      </v-btn>

      <v-btn text @click="$router.push('/')" v-else>
        <v-icon>mdi-arrow-left</v-icon>
        <span class="mr-2">Back</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />

      <v-snackbar
        :color="toastColor"
        top
        right
        multi-line
        :timeout="2500"
        v-model="toast"
        >{{ toastText }}</v-snackbar
      >
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",

  computed: {
    ...mapState(["toastColor", "toastText"]),
    toast: {
      get() {
        return this.$store.state.toast;
      },
      set(value) {
        this.$store.commit("UPDATE_TOAST", value);
      },
    },
  },
};
</script>
