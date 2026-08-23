import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "./src/screens/RegisterScreen/RegisterScreen";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import AgbScreen from "./src/screens/AgbScreen/AgbScreen";
import ImprintScreen from "./src/screens/ImprintScreen/ImprintScreen";
import PrivacyPolicyScreen from "./src/screens/PrivacyPolicyScreen/PrivacyPolicyScreen";

/** Screens des Root-Stacks und ihre Route-Params (keiner der Screens erwartet aktuell Params). */
export type RootStackParamList = {
  Register: undefined;
  Login: undefined;
  AGB: undefined;
  Imprint: undefined;
  PrivacyPolicy: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type RootStackType = typeof Stack;

declare module "@react-navigation/native" {
  interface RootNavigator extends RootStackType {}
}

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Imprint"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="AGB" component={AgbScreen} />
      <Stack.Screen name="Imprint" component={ImprintScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
