<template>
  <v-form @submit.prevent="handleSubmit" class="pt-10" ref="form">
    <v-row justify="center">
      <v-col cols="10" md="6">
        <v-text-field
          label="Enter Url Here"
          placeholder="Placeholder"
          :rules="[(value) => !!value || 'Url is required']"
          v-model="value"
          outlined
        />

        <v-btn
          elevation="2"
          :disabled="isDisabled"
          :loading="isLoading"
          color="primary"
          type="submit"
          >Submit</v-btn
        >
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      value: "",
    };
  },

  computed: {
    ...mapState({
      allQrCodes: (state) => state.allQrCodes,
      isLoading: (state) => state.isLoading,
    }),

    isDisabled() {
      return this.isLoading || this.allQrCodes.length >= 10;
    },
  },

  methods: {
    handleSubmit() {
      const result = this.$refs.form.validate();

      if (result) {
        this.isLoading = true;
        this.$store.dispatch("getQrCode", this.value).then(() => {
          this.$router.push("/qrcodes");
        });
      }
    },
  },
};
</script>

<style></style>
