// Zentrale API-Konfiguration: Basis-URL und Endpoint-Pfade.

const API_BASE_URL = __DEV__
  ? "http://192.168.178.23:8000"
  : "https://api.findesafe.de";

const REGISTER_ENDPOINT = "/api/registration/";

export { API_BASE_URL, REGISTER_ENDPOINT };
