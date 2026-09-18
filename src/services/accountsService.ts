import {
  API_BASE_URL,
  REGISTER_ENDPOINT,
  RESEND_VERIFICATION_CODE,
} from "../config/api";

type Account = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agbAccepted: boolean;
  privacyAccepted: boolean;
};

type ResendVerificationCodeData = {
  email: string;
};

type RegisterResponse = {
  message: string;
};

type ResendVerifyCodeResponse = {
  message: string;
};

/**
 * Registriert ein neues Konto beim Backend.
 *
 * Wirft einen Error in zwei Fällen:
 * - Server antwortet mit einem Fehlerstatus (z. B. 400 bei ungültigen
 *   Eingaben) → Error mit der ersten Fehlermeldung aus der Server-Antwort,
 *   siehe `if (!response.ok)`.
 * - Allgemeiner Fehler, z. B. Netzwerkausfall oder ungültiges JSON in der
 *   Response → wird im `catch` abgefangen und weitergeworfen.
 *
 * @param data - Die Registrierungsdaten aus dem Formular.
 * @returns Die Antwort des Backends bei erfolgreicher Registrierung.
 */
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
      const errorMessage = String(Object.values(result)[0]);
      throw new Error(errorMessage || "Fehler bei der Registrierung");
    }

    return result;
  } catch (error) {
    console.error("Fehler beim Registrieren des Kontos:", error);
    throw error;
  }
}

/**
 * Fordert für ein bestehendes, noch unbestätigtes Konto einen neuen
 * Bestätigungscode beim Backend an.
 *
 * Wirft einen Error in zwei Fällen:
 * - Server antwortet mit einem Fehlerstatus (z. B. 400 bei ungültigen
 *   Eingaben) → Error mit der ersten Fehlermeldung aus der Server-Antwort,
 *   siehe `if (!response.ok)`.
 * - Allgemeiner Fehler, z. B. Netzwerkausfall oder ungültiges JSON in der
 *   Response → wird im `catch` abgefangen und weitergeworfen.
 *
 * @param data - E-Mail des Kontos, für das ein neuer Code angefordert wird.
 * @returns Die Antwort des Backends bei erfolgreicher Anfrage.
 */
export async function ResendVerifyCode(
  data: ResendVerificationCodeData,
): Promise<ResendVerifyCodeResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}${RESEND_VERIFICATION_CODE}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
      }),
    });
    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      const errorMessage = String(Object.values(result)[0]);
      throw new Error(
        errorMessage ||
          "Es ist ein Fehler aufgetreten\nBitte versuche es erneut",
      );
    }

    return result;
  } catch (error) {
    console.error(
      "Fehler beim Anfordern eines neuen Bestätigungscodes:",
      error,
    );
    throw error;
  }
}
