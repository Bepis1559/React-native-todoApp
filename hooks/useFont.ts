import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

export function useFont() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          Inter: require("../../assets/fonts/Inter-Medium.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return [fontsLoaded];
}
