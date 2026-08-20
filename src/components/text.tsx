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
 * Props of the custom Text component.
 * Combines all props of the native <Text> component (TextProps) with an
 * additional, optional `variant` prop.
 */
type Props = TextProps & { variant?: Variant };

/**
 * Wrapper around the native <Text> component with predefined typography
 * variants. `variant` controls font size/weight, all other props (style,
 * onPress, numberOfLines, ...) are passed through as-is.
 *
 * @param variant - Typography variant: "h1" | "h2" | "body" (default) | "caption"
 * @example
 * <Text variant="h1">Title</Text>
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
