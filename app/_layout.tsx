import { GluestackUIProvider, StatusBar } from "@gluestack-ui/themed";
import { SplashScreen, Stack } from "expo-router";
import { config } from "../gluestack.config";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import { getBackgroundColor, getTextColor } from "../styles/colors";
import * as Notifications from "expo-notifications";

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: false,
//   }),
// });

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) await SplashScreen.hideAsync();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  const bgColor = getBackgroundColor();
  const textColor = getTextColor();
  return (
    <GluestackUIProvider colorMode="dark" config={config}>
      <StatusBar barStyle="light-content" />

      <SafeAreaProvider
        style={{ backgroundColor: bgColor }}
        onLayout={onLayoutRootView}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
              navigationBarColor: bgColor,
            }}
          />
          <Stack.Screen
            name="todos/[id]"
            options={{
              headerShadowVisible: false,
              headerTintColor: textColor,
              title: "",
              headerStyle: { backgroundColor: bgColor },
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}
