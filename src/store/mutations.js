const mutations = {
  SET_QR_CODE(state, payload) {
    state.allQrCodes = [...state.allQrCodes, payload];
  },

  SET_LOADING(state, payload) {
    state.isLoading = payload;
  },

  SET_TOAST(state, { color, text }) {
    state.toast = true;
    state.toastColor =
      color === "success" ? "#009432" : color === "error" ? "#EA2027" : color;
    state.toastText = text;
  },

  UPDATE_TOAST(state, payload) {
    state.toast = payload;
  },
};

export default mutations;
