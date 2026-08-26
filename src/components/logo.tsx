import { Image, StyleSheet, Text, View } from "react-native";
import { text } from "../themes/text";

/**
 * App-Logo: Icon plus der Schriftzug "FindeSafe", gestapelt und zentriert.
 *
 * @example
 * <Logo />
 */
export function Logo() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/icons/logo.png")}
        style={styles.logo}
      />
      <Text style={text.h1}>FindeSafe</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    gap: 8,
  },
  logo: {
    width: 80,
    height: 80,
  },
});
