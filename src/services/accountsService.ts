import { API_BASE_URL, REGISTER_ENDPOINT } from "../config/api";

type Account = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agbAccepted: boolean;
  privacyAccepted: boolean;
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
      body: JSON.stringify({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        password: data.password,
        confirm_password: data.confirmPassword,
        agb_accepted: data.agbAccepted,
        privacy_accepted: data.privacyAccepted,
      }),
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
