// Zentrale API-Konfiguration: Basis-URL und Endpoint-Pfade.

const API_BASE_URL = __DEV__
  ? "http://192.168.178.23:8000"
  : "https://api.findesafe.de";

const REGISTER_ENDPOINT = "/api/register/";
const RESEND_VERIFICATION_CODE = "/api/resend-verification-code/";
const ACCOUNT_VERIFICATION_ENDPOINT = "/api/account-verification/";

export {
  API_BASE_URL,
  REGISTER_ENDPOINT,
  RESEND_VERIFICATION_CODE,
  ACCOUNT_VERIFICATION_ENDPOINT,
};
