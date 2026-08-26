import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import { colors } from "../themes/colors";
import { text } from "../themes/text";

/** Props der eigenen PrimaryButton-Komponente. */
type Props = Omit<PressableProps, "disabled"> & {
  title: string;
  isDisabled?: boolean;
};

/**
 * App-weiter primärer Aktionsbutton. `isDisabled` steuert nur den
 * visuellen Stil (mint vs. elevated/disabled Look) - onPress feuert
 * trotzdem, damit der Aufrufer Validierungsfeedback anzeigen kann (z. B.
 * über react-hook-forms handleSubmit), statt dass der Press stillschweigend
 * nichts tut.
 *
 * @param title - Button-Beschriftung
 * @param isDisabled - Zeigt den Disabled-Stil, wenn true
 * @example
 * <PrimaryButton title="Registrieren" isDisabled={!isValid} onPress={handleSubmit(onSubmit)} />
 */
export function PrimaryButton({ title, isDisabled, style, ...pressableProps }: Props) {
  return (
    <Pressable
      style={(state) => [
        styles.button,
        isDisabled && styles.buttonDisabled,
        typeof style === "function" ? style(state) : style,
      ]}
      {...pressableProps}
    >
      <Text
        style={[text.body, styles.label, isDisabled && styles.labelDisabled]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.mintPrimary,
  },
  buttonDisabled: {
    backgroundColor: colors.bgElevated,
    borderWidth: 0,
  },
  label: {
    fontWeight: "700",
    color: colors.bgBase,
  },
  labelDisabled: {
    color: colors.textDisabled,
  },
});
