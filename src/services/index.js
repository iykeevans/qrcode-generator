import ky from "ky";

import config from "./config";

const apiClient = ky.create({
  prefixUrl: config.baseURl,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

/**
 *
 * @param {string} payload
 * @returns {promise}
 */
export const $_fetchQrCode = (payload) => {
  return apiClient.get(config.getQrCode(payload)).blob();
};
