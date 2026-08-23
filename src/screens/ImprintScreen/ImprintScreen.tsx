import { StyleSheet, View } from "react-native";
import { Text } from "../../components/text";
import { colors } from "../../themes/colors";

export default function ImprintScreen() {
  return (
    <View style={styles.container}>
      <Text variant="h1">Imprint</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgBase,
    justifyContent: "center",
    alignItems: "center",
  },
});
