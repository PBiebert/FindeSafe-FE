import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import { colors } from "../themes/colors";
import { text } from "../themes/text";
import { spacing } from "../themes/spacing";

/**
 * Props der eigenen FormField-Komponente.
 * Kombiniert alle Props der nativen <TextInput>-Komponente (TextInputProps)
 * mit zusätzlichen Props label, required, errorMessage und isFocused.
 */
type Props = TextInputProps & {
  label: string;
  required?: boolean;
  errorMessage?: string;
  isFocused: boolean;
};

/**
 * Wrapper, der ein Label, eine native <TextInput> mit Fokus-Rahmen und
 * eine Fehlermeldung zu einer Komponente kombiniert. Hält selbst keinen
 * State oder Validierungslogik - value, errorMessage und isFocused kommen
 * vom Aufrufer (typischerweise ein react-hook-form Controller, siehe
 * RegisterScreen.tsx).
 *
 * @param label - Feldbeschriftung, über dem Input angezeigt
 * @param required - Fügt eine Pflichtfeld-Markierung (*) neben dem Label hinzu
 * @param errorMessage - Fehlertext, ausgeblendet (aber Platz bleibt reserviert), wenn undefined
 * @param isFocused - Hebt den Rahmen des Inputs hervor, wenn true
 * @example
 * <FormField label="Vorname" required value={value} onChangeText={onChange} isFocused={isFocused} />
 */
export function FormField({
  label,
  required,
  errorMessage,
  isFocused,
  style,
  ...textInputProps
}: Props) {
  return (
    <View style={styles.field}>
      <Text style={text.lable}>
        {label} {required && <Text style={text.requiredLable}>*</Text>}
      </Text>
      <TextInput
        style={[
          styles.textInput,
          isFocused && styles.inputActive,
          errorMessage && styles.inputInvalid,
          style,
        ]}
        {...textInputProps}
      />
      <Text style={[text.invalidInput, !errorMessage && styles.dNone]}>
        {errorMessage ?? " "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    marginBottom: spacing.xs,
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.m,
    marginTop: spacing.s,
    marginBottom: spacing.xs,
    width: "100%",
    backgroundColor: colors.bgSurface,
    color: colors.textPrimary,
  },
  inputActive: {
    borderColor: colors.mintPrimary,
    borderWidth: 1,
  },
  inputInvalid: {
    borderColor: colors.error,
  },
  dNone: {
    opacity: 0,
  },
});
