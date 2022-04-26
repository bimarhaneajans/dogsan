import { tryCatch } from "@thalesrc/js-utils";
import {
  PRODUCT_NAME_LIST_URL,
  PLANOGRAM_LIST_URL,
  BRAND_LIST_URL,
  BARCODE_LIST_URL,
  REFERENCE_LIST_URL,
  PRICE_LIST_URL,
} from "../utils/url";
import http from "./http";
import { pathWithQueryString } from "../helpers/pathWithQueryString";

const searchRequest = {
  async getSearchByProductNameList(id, payload) {
    const url = pathWithQueryString(`${PRODUCT_NAME_LIST_URL}/${id}/Price`, payload);

    const [error, result] = await tryCatch(http.get(url));

    if (error) throw error;

    return result?.data?.result;
  },

  async getSearchByPlanogramList(id, secondId, payload) {
    const url = pathWithQueryString(`${PLANOGRAM_LIST_URL}/${id}/${secondId}/Price`, payload);

    const [error, result] = await tryCatch(http.get(url));

    if (error) throw error;

    return result?.data?.result;
  },

  async getSearchByBrandList(id, payload) {
    const url = pathWithQueryString(`${BRAND_LIST_URL}/${id}/Price`, payload);

    const [error, result] = await tryCatch(http.get(url));

    if (error) throw error;

    return result?.data?.result;
  },

  async getSearchByBarcodeList(id, payload) {
    const url = pathWithQueryString(`${BARCODE_LIST_URL}/${id}/Price`, payload);

    const [error, result] = await tryCatch(http.get(url));

    if (error) throw error;

    return result?.data?.result;
  },

  async getSearchByReferenceList(id, payload) {
    const url = pathWithQueryString(`${REFERENCE_LIST_URL}/${id}/Price`, payload);

    const [error, result] = await tryCatch(http.get(url));

    if (error) throw error;

    return result?.data?.result;
  },

  async getSearchByPriceLabelList(payload) {
    const url = pathWithQueryString(`${PRICE_LIST_URL}`, payload);

    const [error, result] = await tryCatch(http.get(url));

    if (error) throw error;

    return result?.data?.result;
  },
  async getSearchByPlanogramDateList(payload) {
    const url = pathWithQueryString(`${PLANOGRAM_LIST_URL}/Price`, payload);

    const [error, result] = await tryCatch(http.get(url));

    if (error) throw error;

    return result?.data?.result;
  },
};
export default searchRequest;
