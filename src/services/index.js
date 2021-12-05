import ky from "ky";

import config from "./config";

export const $_fetchQrCode = (payload) => {
  return ky.get(config.getQrCode(payload)).blob();
};
