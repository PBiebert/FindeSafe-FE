import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { colors } from "../../themes/colors";
import { Text } from "../../components/text";
import { FormField } from "../../components/form-field";
import { CheckboxField } from "../../components/checkbox-field";
import { PrimaryButton } from "../../components/primary-button";
import { Logo } from "../../components/logo";

/** Union der Textfeldnamen, für typsicheren Feldzugriff und Fokus-Tracking. */
type TextFieldName =
  | "vorname"
  | "nachname"
  | "email"
  | "passwort"
  | "passwortWiederholen";

/** Union der Checkbox-Feldnamen (kein Fokus-Status, keine Texteingabe). */
type CheckboxFieldName = "agbs" | "datenschutz";

/**
 * Formularwerte: Textfelder als string, Checkbox-Felder als boolean.
 * Record<FieldName, string> allein passt hier nicht, da nicht jedes Feld
 * denselben Werttyp hat.
 */
type FormValues = Record<TextFieldName, string> &
  Record<CheckboxFieldName, boolean>;

/**
 * Registrierungs-Screen. Jedes Feld ist über einen Controller an
 * react-hook-form gebunden; Werte und Validierungsfehler leben in dessen
 * internem State statt in lokalem useState. Nur der Fokus-Status (welches
 * Feld gerade aktiv ist, für den Rahmenstil) wird lokal gehalten, da
 * react-hook-form kein Konzept von Fokus kennt.
 *
 * @example
 * <RegisterScreen />
 */
export default function RegisterScreen() {
  /** Aktuell fokussiertes Textfeld, oder null. Steuert nur den Rahmenstil. */
  const [focusedField, setFocusedField] = useState<TextFieldName | null>(null);

  const {
    control,
    getValues,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: {
      vorname: "",
      nachname: "",
      email: "",
      passwort: "",
      passwortWiederholen: "",
      agbs: false,
      datenschutz: false,
    },
  });

  const onSubmit = async (values: FormValues) => {
    console.log(values);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={0}
    >
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Logo />

        <View style={styles.form}>
          <Text variant="h1" style={styles.title}>
            Registrieren Sie sich:
          </Text>

          {/* Vorname */}
          <Controller
            control={control}
            name="vorname"
            rules={{ required: "Bitte gib deinen Vornamen ein" }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <FormField
                label="Vorname"
                required
                placeholder="Vorname"
                value={value}
                onChangeText={onChange}
                errorMessage={error?.message}
                isFocused={focusedField === "vorname"}
                onFocus={() => setFocusedField("vorname")}
                onBlur={() => {
                  setFocusedField(null);
                  onBlur();
                }}
              />
            )}
          />

          {/* Nachname */}
          <Controller
            control={control}
            name="nachname"
            rules={{ required: "Bitte gib deinen Nachnamen ein" }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <FormField
                label="Nachname"
                required
                placeholder="Nachname"
                value={value}
                onChangeText={onChange}
                errorMessage={error?.message}
                isFocused={focusedField === "nachname"}
                onFocus={() => setFocusedField("nachname")}
                onBlur={() => {
                  setFocusedField(null);
                  onBlur();
                }}
              />
            )}
          />

          {/* E-Mail */}
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Bitte gib eine gültige E-Mail-Adresse ein",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Bitte gib eine gültige E-Mail-Adresse ein",
              },
            }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <FormField
                label="E-Mail"
                required
                placeholder="E-Mail"
                keyboardType="email-address"
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
                errorMessage={error?.message}
                isFocused={focusedField === "email"}
                onFocus={() => setFocusedField("email")}
                onBlur={() => {
                  setFocusedField(null);
                  onBlur();
                }}
              />
            )}
          />

          {/* Password */}
          <Controller
            control={control}
            name="passwort"
            rules={{
              required: "Bitte gib ein gültiges Passwort ein",
              minLength: {
                value: 8,
                message: "Passwort muss mindestens 8 Zeichen lang sein",
              },
            }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <FormField
                label="Passwort"
                required
                placeholder="Passwort"
                secureTextEntry
                value={value}
                onChangeText={onChange}
                errorMessage={error?.message}
                isFocused={focusedField === "passwort"}
                onFocus={() => setFocusedField("passwort")}
                onBlur={() => {
                  setFocusedField(null);
                  onBlur();
                }}
              />
            )}
          />

          {/* Password wiederholen */}
          <Controller
            control={control}
            name="passwortWiederholen"
            rules={{
              required: "Bitte wiederhole dein Passwort",
              validate: (value) =>
                value === getValues("passwort") ||
                "Die Passwörter stimmen nicht überein",
            }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <FormField
                label="Passwort wiederholen"
                required
                placeholder="Passwort wiederholen"
                secureTextEntry
                value={value}
                onChangeText={onChange}
                errorMessage={error?.message}
                isFocused={focusedField === "passwortWiederholen"}
                onFocus={() => setFocusedField("passwortWiederholen")}
                onBlur={() => {
                  setFocusedField(null);
                  onBlur();
                }}
              />
            )}
          />

          {/* AGBs */}
          <Controller
            control={control}
            name="agbs"
            rules={{ required: "Bitte akzeptiere die AGB" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <CheckboxField
                label="Ich akzeptiere die AGB"
                value={value}
                onChange={onChange}
                errorMessage={error?.message}
              />
            )}
          />

          {/* Datenschutz */}
          <Controller
            control={control}
            name="datenschutz"
            rules={{ required: "Bitte akzeptiere die Datenschutzerklärung" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <CheckboxField
                label="Ich akzeptiere die Datenschutzerklärung"
                value={value}
                onChange={onChange}
                errorMessage={error?.message}
              />
            )}
          />

          <PrimaryButton
            title="Registrieren"
            isDisabled={!isValid || isSubmitting}
            onPress={handleSubmit(onSubmit)}
            style={styles.submitButton}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgBase,
  },
  contentContainer: {
    alignItems: "center",
    paddingBottom: 40,
  },
  form: {
    width: "90%",
    maxWidth: 360,
    paddingHorizontal: 24,
    marginTop: 24,
  },
  title: {
    marginBottom: 16,
  },
  submitButton: {
    marginTop: 12,
  },
});
