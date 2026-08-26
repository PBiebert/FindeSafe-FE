import { Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { colors } from "../themes/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export function BackButton() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <Pressable
      style={[styles.backButton, { top: insets.top + 16 }]}
      hitSlop={12}
      onPress={() => navigation.goBack()}
    >
      <MaterialIcons name="arrow-back" size={24} color={colors.textPrimary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    left: 16,
    zIndex: 1,
  },
});
