const endpoints = {
  baseURl: "https://radiant-citadel-77581.herokuapp.com",
  getQrCode: (param) => `https://www.qrtag.net/api/qr_4.png?url=${param}`,
};

export default endpoints;
