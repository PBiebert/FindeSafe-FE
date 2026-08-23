import { Pressable, PressableProps, StyleSheet } from "react-native";
import { colors } from "../themes/colors";
import { Text } from "./text";

/** Props of the custom PrimaryButton component. */
type Props = Omit<PressableProps, "disabled"> & {
  title: string;
  isDisabled?: boolean;
};

/**
 * App-wide primary action button. `isDisabled` only controls the visual
 * style (mint vs. elevated/disabled look) - onPress still fires so the
 * caller can show validation feedback (e.g. via react-hook-form's
 * handleSubmit) instead of the press silently doing nothing.
 *
 * @param title - Button label
 * @param isDisabled - Shows the disabled style when true
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
        variant="body"
        style={[styles.label, isDisabled && styles.labelDisabled]}
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
