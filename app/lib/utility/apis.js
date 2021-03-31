const BASE_URL = process.env.API_URL;
const COMMON_API = process.env.API_CONTEXTPATH;

const URLS = {
  SUBCATEGORY: `${BASE_URL}${COMMON_API}user/sub_category`,
  USERLOGIN: `${BASE_URL}${COMMON_API}userlogin`,
  BOOKING_API: `${BASE_URL}${COMMON_API}booking`,
  ADDRESS_API: `${BASE_URL}${COMMON_API}address`,
};
export default URLS;
