import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { colors } from "../../themes/colors";
import { text } from "../../themes/text";
import { spacing } from "../../themes/spacing";
import { FormField } from "../../components/form-field";
import { CheckboxField } from "../../components/checkbox-field";
import { PrimaryButton } from "../../components/primary-button";
import { Logo } from "../../components/logo";
import { BackButton } from "../../components/back-button";
import { registerAccount } from "../../services/accountsService";

/** Union der Textfeldnamen, für typsicheren Feldzugriff und Fokus-Tracking. */
type TextFieldName =
  | "firstName"
  | "lastName"
  | "email"
  | "password"
  | "confirmPassword";

/** Union der Checkbox-Feldnamen (kein Fokus-Status, keine Texteingabe). */
type CheckboxFieldName = "agbAccepted" | "privacyAccepted";

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
  const navigation = useNavigation();

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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agbAccepted: false,
      privacyAccepted: false,
    },
  });

  const onSubmit = async (values: FormValues) => {
    await registerAccount(values);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={0}
    >
      <BackButton />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Logo />

        <View style={styles.form}>
          <Text style={[text.h1, styles.title]}>Registrieren Sie sich:</Text>

          {/* Vorname */}
          <Controller
            control={control}
            name="firstName"
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
                isFocused={focusedField === "firstName"}
                onFocus={() => setFocusedField("firstName")}
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
            name="lastName"
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
                isFocused={focusedField === "lastName"}
                onFocus={() => setFocusedField("lastName")}
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
            name="password"
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
                isFocused={focusedField === "password"}
                onFocus={() => setFocusedField("password")}
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
            name="confirmPassword"
            rules={{
              required: "Bitte wiederhole dein Passwort",
              validate: (value) =>
                value === getValues("password") ||
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
                isFocused={focusedField === "confirmPassword"}
                onFocus={() => setFocusedField("confirmPassword")}
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
            name="agbAccepted"
            rules={{ required: "Bitte akzeptiere die AGB" }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <CheckboxField
                label={
                  <Text style={text.body}>
                    Ich akzeptiere die{" "}
                    <Text
                      style={text.link}
                      onPress={() => navigation.navigate("AGB")}
                    >
                      AGB
                    </Text>
                  </Text>
                }
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                errorMessage={error?.message}
              />
            )}
          />

          {/* Datenschutz */}
          <Controller
            control={control}
            name="privacyAccepted"
            rules={{ required: "Bitte akzeptiere die Datenschutzerklärung" }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <CheckboxField
                label={
                  <Text style={text.body}>
                    Ich akzeptiere die{" "}
                    <Text
                      style={text.link}
                      onPress={() => navigation.navigate("PrivacyPolicy")}
                    >
                      Datenschutzerklärung
                    </Text>
                  </Text>
                }
                value={value}
                onChange={onChange}
                onBlur={onBlur}
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
    paddingBottom: spacing.huge,
  },
  form: {
    width: "90%",
    maxWidth: 360,
    paddingHorizontal: spacing.xxl,
    marginTop: spacing.xxl,
  },
  title: {
    marginBottom: spacing.l,
  },
  submitButton: {
    marginTop: spacing.m,
  },
});
