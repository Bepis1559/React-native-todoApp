import { GluestackUIProvider, StatusBar, Spinner } from "@gluestack-ui/themed";
import { SplashScreen, Stack } from "expo-router";
import { config } from "../gluestack.config";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import { getBackgroundColor, getTextColor } from "../styles/colors";
import { Appearance } from "react-native";
import { useAppState } from "../hooks/useAppState";
import { AppContainer } from "../wrappers/AppContainer";
import { useSetTodosToDbData } from "../hooks/useSetTodosToDbData";
import { useRegisterNotificationHandler } from "../notifications/useRegisterNotificationHandler";
import { useAddNotificationListener } from "../notifications/useAddNotificationListener";

export default function RootLayout() {
  const [isLoading] = useSetTodosToDbData();
  useRegisterNotificationHandler();
  useAddNotificationListener();
  useAppState();

  Appearance.setColorScheme("dark");
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
        {isLoading ? (
          <AppContainer>
            <Spinner size="large" margin={"auto"} color={"white"} />
          </AppContainer>
        ) : (
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
        )}
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}
