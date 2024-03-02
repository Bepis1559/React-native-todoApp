import { GluestackUIProvider } from "@gluestack-ui/themed";
import { SplashScreen, Stack } from "expo-router";
import { config } from "../gluestack.config";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCallback } from "react";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <GluestackUIProvider colorMode="dark" config={config}>
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}
