import { Pressable, StyleSheet, View } from "react-native";
import { colors } from "../themes/colors";
import { Text } from "./text";
import MaterialIcons from "@react-native-vector-icons/material-icons";

/** Props of the custom CheckboxField component. */
type Props = {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
  errorMessage?: string;
};

/**
 * Wrapper that combines a checkbox (box + checkmark icon, toggled via
 * Pressable), its label and an error message into one component. Holds no
 * state or validation logic itself - value, onChange and errorMessage come
 * from the caller (typically a react-hook-form Controller, see
 * RegisterScreen.tsx).
 *
 * @param label - Text shown next to the checkbox
 * @param value - Whether the checkbox is currently checked
 * @param onChange - Called with the new value when the checkbox is toggled
 * @param errorMessage - Error text, hidden (but space still reserved) when undefined
 * @example
 * <CheckboxField label="Ich akzeptiere die AGB" value={value} onChange={onChange} />
 */
export function CheckboxField({ label, value, onChange, errorMessage }: Props) {
  return (
    <View style={styles.field}>
      <Pressable style={styles.checkboxRow} onPress={() => onChange(!value)}>
        <View style={[styles.checkbox, errorMessage && styles.checkboxInvalid]}>
          {value && (
            <MaterialIcons name="check" size={18} color={colors.mintPrimary} />
          )}
        </View>
        <Text variant="body">{label}</Text>
      </Pressable>
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
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxInvalid: {
    borderColor: colors.error,
  },
  dNone: {
    opacity: 0,
  },
});
