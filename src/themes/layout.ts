import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { spacing } from "./spacing";

export const layout = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgBase,
  },
  contentContainer: {
    alignItems: "center",
    paddingBottom: spacing.huge,
    paddingHorizontal: spacing.xxxl,
  },
});
