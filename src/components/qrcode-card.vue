<template>
  <v-card elevation="2">
    <v-img height="250" :src="qrCode" :alt="url" contain></v-img>

    <v-card-text>{{ url }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    qrCode: String,
    url: String,
  },
};
</script>

<style></style>
