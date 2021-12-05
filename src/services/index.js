import ky from "ky";

import config from "./config";

/**
 *
 * @param {string} payload
 * @returns {promise}
 */
export const $_fetchQrCode = (payload) => {
  return ky.get(config.getQrCode(payload)).blob();
};
