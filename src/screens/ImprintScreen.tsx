import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../themes/colors";
import { text } from "../../themes/text";

export default function ImprintScreen() {
  return (
    <View style={styles.container}>
      <Text style={text.h1}>Imprint</Text>
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
