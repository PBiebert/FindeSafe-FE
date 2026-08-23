import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { colors } from "../themes/colors";
import { Text } from "./text";

/**
 * Props of the custom FormField component.
 * Combines all props of the native <TextInput> component (TextInputProps)
 * with additional label, required, errorMessage and isFocused props.
 */
type Props = TextInputProps & {
  label: string;
  required?: boolean;
  errorMessage?: string;
  isFocused: boolean;
};

/**
 * Wrapper that combines a label, a native <TextInput> with a focus border
 * and an error message into one component. Holds no state or validation
 * logic itself - value, errorMessage and isFocused come from the caller
 * (typically a react-hook-form Controller, see RegisterScreen.tsx).
 *
 * @param label - Field label, shown above the input
 * @param required - Adds a required marker (*) next to the label
 * @param errorMessage - Error text, hidden (but space still reserved) when undefined
 * @param isFocused - Highlights the input border when true
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
      <Text variant="lable">
        {label} {required && <Text variant="requiredLable">*</Text>}
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
      <Text variant="invalidInput" style={!errorMessage && styles.dNone}>
        {errorMessage ?? " "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    marginBottom: 4,
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 6,
    marginBottom: 4,
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
