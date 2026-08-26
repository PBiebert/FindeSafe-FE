import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../themes/colors";
import { text } from "../themes/text";
import MaterialIcons from "@react-native-vector-icons/material-icons";

/** Props der eigenen CheckboxField-Komponente. */
type Props = {
  label: string | ReactNode;
  value: boolean;
  onChange: (value: boolean) => void;
  errorMessage?: string;
};

/**
 * Wrapper, der eine Checkbox (Box + Häkchen-Icon, umgeschaltet über
 * Pressable), ihr Label und eine Fehlermeldung zu einer Komponente
 * kombiniert. Hält selbst keinen State oder Validierungslogik - value,
 * onChange und errorMessage kommen vom Aufrufer (typischerweise ein
 * react-hook-form Controller, siehe RegisterScreen.tsx).
 *
 * @param label - Text neben der Checkbox, oder JSX (z. B. mit einem
 * verschachtelten klickbaren <Text onPress={...}> für einen Link)
 * @param value - Ob die Checkbox aktuell aktiviert ist
 * @param onChange - Wird mit dem neuen Wert aufgerufen, wenn die Checkbox umgeschaltet wird
 * @param errorMessage - Fehlertext, ausgeblendet (aber Platz bleibt reserviert), wenn undefined
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
        {typeof label === "string" ? (
          <Text style={text.body}>{label}</Text>
        ) : (
          label
        )}
      </Pressable>
      <Text style={[text.invalidInput, !errorMessage && styles.dNone]}>
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
