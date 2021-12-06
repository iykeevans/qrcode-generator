import { $_fetchQrCode } from "../services";

const actions = {
  async getQrCode({ commit }, payload) {
    try {
      commit("SET_LOADING", true);
      const response = await $_fetchQrCode(payload);
      const imageObjectURL = URL.createObjectURL(response);

      commit("SET_QR_CODE", { url: payload, qrCode: imageObjectURL });
    } catch (err) {
      commit("SET_TOAST", { text: "An error occured", color: "error" });
      throw err;
    } finally {
      commit("SET_LOADING", false);
    }
  },
};

export default actions;
