import { Text as RNText, TextProps, StyleSheet } from "react-native";
import { colors } from "../themes/colors";

type Variant =
  | "h1"
  | "h2"
  | "body"
  | "caption"
  | "lable"
  | "requiredLable"
  | "invalidInput";

/**
 * Props der eigenen Text-Komponente.
 * Kombiniert alle Props der nativen <Text>-Komponente (TextProps) mit
 * einem zusätzlichen, optionalen `variant`-Prop.
 */
type Props = TextProps & { variant?: Variant };

/**
 * Wrapper um die native <Text>-Komponente mit vordefinierten Typografie-
 * Varianten. `variant` steuert Schriftgröße/-gewicht, alle anderen Props
 * (style, onPress, numberOfLines, ...) werden unverändert durchgereicht.
 *
 * @param variant - Typografie-Variante: "h1" | "h2" | "body" (Standard) | "caption" | "lable" | "requiredLable" | "invalidInput"
 * @example
 * <Text variant="h1">Titel</Text>
 */
export function Text({ variant = "body", style, ...props }: Props) {
  return <RNText {...props} style={[styles[variant], style]} />;
}

const styles = StyleSheet.create({
  h1: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 28,
    color: colors.textPrimary,
  },
  h2: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 22,
    color: colors.textPrimary,
  },
  body: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 16,
    color: colors.textPrimary,
  },
  caption: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 12,
    color: colors.textSecondary,
  },
  lable: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 16,
    color: colors.textPrimary,
  },
  requiredLable: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 16,
    color: colors.coralSignal,
  },
  invalidInput: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 12,
    color: colors.error,
  },
});
