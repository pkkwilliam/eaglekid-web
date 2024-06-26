const LOCAL_DOMAIN = "http://localhost:8081";
const PROD_DOMAIN = "https://api.littleeagleacademy.com";

export const CONTACT_US = (payload) => ({
  requestUrl: getDomain() + "/public/reactive/misc/v1/contact_us",
  method: "POST",
  body: JSON.stringify(payload),
});

export const GET_CLASSES = {
  requestUrl: getDomain() + "/public/reactive/clazz/v1",
  method: "GET",
};

export const GET_INSTRUCTORS = {
  requestUrl: getDomain() + "/public/reactive/instructor/v1",
  method: "GET",
};

export const REQUEST_PAYMENT = (payload) => ({
  requestUrl: getDomain() + "/public/reactive/payment/v1",
  method: "POST",
  body: JSON.stringify(payload),
});

export const PAYMENT_SUCCESS = (transactionId) => ({
  requestUrl:
    getDomain() +
    `/public/reactive/payment/v1/payment_success?transactionId=${transactionId}`,
  method: "PUT",
});

export const PAYMENT_CANCEL = (transactionId) => ({
  requestUrl:
    getDomain() +
    `/public/reactive/payment/v1/payment_cancel?transactionId=${transactionId}`,
  method: "PUT",
});

export const SUBSCRIBE_NEWS_LETTER = (payload) => ({
  requestUrl: getDomain() + "/public/reactive/misc/v1/subscribe_news_letter",
  method: "POST",
  body: JSON.stringify(payload),
});

function getDomain() {
  return process.env.NODE_ENV === "development" ? LOCAL_DOMAIN : PROD_DOMAIN;
}
