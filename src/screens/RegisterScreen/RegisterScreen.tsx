import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { colors } from "../../themes/colors";
import { Text } from "../../components/text";
import { FormField } from "../../components/form-field";

type FieldName =
  | "vorname"
  | "nachname"
  | "email"
  | "passwort"
  | "passwortWiederholen";

type FormValues = Record<FieldName, string>;

export default function RegisterScreen() {
  const [focusedField, setFocusedField] = useState<FieldName | null>(null);

  const { control, getValues } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: {
      vorname: "",
      nachname: "",
      email: "",
      passwort: "",
      passwortWiederholen: "",
    },
  });

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
        <View style={styles.logoContainer}>
          <Image
            source={require("./../../../assets/icons/logo.png")}
            style={styles.logo}
          />
          <Text variant="h1">FindeSafe</Text>
        </View>

        <View style={styles.form}>
          <Text variant="h1" style={styles.title}>
            Registrieren Sie sich:
          </Text>

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
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    gap: 8,
  },
  logo: {
    width: 80,
    height: 80,
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
});
