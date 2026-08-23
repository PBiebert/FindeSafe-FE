import { Image, StyleSheet, View } from "react-native";
import { Text } from "./text";

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
      <Text variant="h1">FindeSafe</Text>
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
