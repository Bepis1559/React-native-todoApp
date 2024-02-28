import { useFonts } from "expo-font";
import { useCallback, type ReactElement, type ReactNode } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Box, GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "../gluestack.config";

type props = {
  children: ReactNode;
};

export function AppContainer({ children }: props): ReactElement | null {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
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
      <Box
        onLayout={onLayoutRootView}
        w={"100%"}
        h="100%"
        sx={{
          _dark: {
            bg: "$light900",
          },
        }}>
        {children}
      </Box>
    </GluestackUIProvider>
  );
}
