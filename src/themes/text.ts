import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const text = StyleSheet.create({
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
  link: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 16,
    color: colors.mintPrimary,
    textDecorationLine: "underline",
  },
});
