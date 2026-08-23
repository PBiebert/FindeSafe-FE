import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import { colors } from "../../themes/colors";
import { Text } from "../../components/text";
import { FormField } from "../../components/form-field";
import { PrimaryButton } from "../../components/primary-button";
import { Logo } from "../../components/logo";

/** Union der Textfeldnamen, für typsicheren Feldzugriff und Fokus-Tracking. */
type TextFieldName = "email" | "passwort";

type FormValues = Record<TextFieldName, string>;

/**
 * Login-Screen, aufgebaut aus Logo, FormField und PrimaryButton. Folgt dem
 * Jedes Feld ist über einen Controller an react-hook-form gebunden,
 * nur der Fokus-Status (welchesFeld gerade aktiv ist, für den Rahmenstil) wird lokal gehalten.
 *
 * @example
 * <LoginScreen />
 */
export default function LoginScreen() {
  const navigation = useNavigation();

  /** Aktuell fokussiertes Textfeld, oder null. Steuert nur den Rahmenstil. */
  const [focusedField, setFocusedField] = useState<TextFieldName | null>(null);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      passwort: "",
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
            Anmelden:
          </Text>

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
            rules={{ required: "Bitte gib dein Passwort ein" }}
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

          <PrimaryButton
            title="Anmelden"
            isDisabled={!isValid || isSubmitting}
            onPress={handleSubmit(onSubmit)}
            style={styles.submitButton}
          />

          <Pressable
            style={styles.registerLink}
            onPress={() => navigation.navigate("Register" as never)}
          >
            <Text variant="body" style={styles.registerLinkText}>
              Noch kein Konto?{" "}
              <Text variant="lable" style={styles.registerLinkAccent}>
                Jetzt registrieren
              </Text>
            </Text>
          </Pressable>
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
  registerLink: {
    marginTop: 20,
    alignItems: "center",
  },
  registerLinkText: {
    color: colors.textSecondary,
  },
  registerLinkAccent: {
    color: colors.mintPrimary,
  },
});
