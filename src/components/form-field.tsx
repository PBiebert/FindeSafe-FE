import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { colors } from "../themes/colors";
import { Text } from "./text";

type Props = TextInputProps & {
  label: string;
  required?: boolean;
  errorMessage?: string;
  isFocused: boolean;
};

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
        style={[styles.textInput, isFocused && styles.inputActive, style]}
        {...textInputProps}
      />
      <Text
        variant="invalidInput"
        style={!errorMessage && styles.notVisible}
      >
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
  notVisible: {
    opacity: 0,
  },
});
