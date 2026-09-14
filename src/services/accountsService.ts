import { API_BASE_URL, REGISTER_ENDPOINT } from "../config/api";

type Account = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  password_confirm: string;
  agb_accepted: boolean;
  privacy_accepted: boolean;
};

type RegisterResponse = {
  message: string;
};

export async function registerAccount(
  data: Account,
): Promise<RegisterResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}${REGISTER_ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message ?? `HTTP-Feher:${response.status}`);
    }

    return result;
  } catch (error) {
    console.error("Fehler beim Registrieren des Kontos:", error);
    throw error;
  }
}
