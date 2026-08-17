import { View, StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { Text } from "../../components/text";

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Text variant="h1">Test</Text>
      <Text variant="h2">Test</Text>
      <Text variant="body">Test</Text>
      <Text variant="caption">Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgBase,
    alignItems: "center",
    justifyContent: "center",
  },
});
