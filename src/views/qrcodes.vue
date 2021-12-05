<template>
  <v-container>
    <v-row v-if="allQrCodes.length">
      <v-col cols="12" md="4" v-for="(item, i) in allQrCodes" :key="i">
        <qrcode-card :url="item.url" :qrCode="item.qrCode" />
      </v-col>
    </v-row>

    <div v-else class="d-flex flex-column" style="align-items: flex-start">
      No Data Available Currently
      <v-btn
        color="primary"
        elevation="2"
        class="mt-3"
        id="view-back-button"
        @click="$router.push('/')"
      >
        <v-icon>mdi-arrow-left</v-icon>
        <span class="mr-2">Back</span>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import QrcodeCard from "../components/qrcode-card.vue";

export default {
  name: "QRCodes",
  components: { QrcodeCard },
  computed: {
    allQrCodes() {
      return this.$store.state.allQrCodes;
    },
  },
};
</script>

<style></style>
