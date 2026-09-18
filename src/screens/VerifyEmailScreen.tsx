import { useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { colors } from "../themes/colors";
import { text } from "../themes/text";
import { spacing } from "../themes/spacing";
import { FormField } from "../components/form-field";
import { PrimaryButton } from "../components/primary-button";
import { RootStackParamList } from "../../App";
import { layout } from "../themes/layout";
import { BackButton } from "../components/back-button";

type VerifyEmailRouteProp = RouteProp<RootStackParamList, "VerifyEmail">;

/**
 * Bestätigungs-Screen nach erfolgreicher Registrierung (Backend antwortet
 * mit Status 2xx, z. B. 201). Zeigt an, dass der Account noch per
 * Bestätigungscode aktiviert werden muss.
 *
 * @example
 * navigation.navigate("VerifyEmail", { email: values.email });
 */
export default function VerifyEmailScreen() {
  const navigation = useNavigation();
  const route = useRoute<VerifyEmailRouteProp>();
  const { email } = route.params ?? { email: "philipp.biebert@gmail.com" };

  const [code, setCode] = useState("");
  const [isCodeFocused, setIsCodeFocused] = useState(false);

  return (
    <KeyboardAvoidingView
      style={layout.container}
      behavior="padding"
      keyboardVerticalOffset={0}
    >
      <BackButton />
      <ScrollView
        contentContainerStyle={layout.contentContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.content}>
          <View style={styles.iconCircle}>
            <MaterialIcons
              name="mark-email-read"
              size={48}
              color={colors.mintPrimary}
            />
          </View>

          <Text style={[text.h1, styles.title]}>Registrierung erfolgreich</Text>

          <Text style={[text.body, styles.message]}>
            Bitte aktiviere deinen Account.{"\n"}
            Du erhältst in Kürze einen Bestätigungscode
            {email ? <Text style={text.lable}> an {email}</Text> : null}.
          </Text>

          <View style={styles.codeField}>
            <FormField
              label="Bestätigungscode"
              required
              placeholder="Bitte gib den Code ein."
              keyboardType="number-pad"
              value={code}
              onChangeText={setCode}
              isFocused={isCodeFocused}
              onFocus={() => setIsCodeFocused(true)}
              onBlur={() => setIsCodeFocused(false)}
            />
          </View>

          <PrimaryButton
            title="Bestätigen"
            isDisabled={!code}
            onPress={() =>
              navigation.reset({ index: 0, routes: [{ name: "Login" }] })
            }
            style={styles.button}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  iconCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.bgElevated,
    marginBottom: spacing.xxl,
  },
  title: {
    textAlign: "center",
    marginBottom: spacing.l,
  },
  message: {
    textAlign: "center",
    color: colors.textSecondary,
    marginBottom: spacing.xxxl,
  },
  codeField: {
    width: "100%",
    maxWidth: 360,
  },
  button: {
    width: "100%",
    maxWidth: 360,
  },
});
