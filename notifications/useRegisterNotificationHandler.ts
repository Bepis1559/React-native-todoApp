import * as Notifications from "expo-notifications";
import { useEffect } from "react";
export function useRegisterNotificationHandler() {
  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });
  }, []);
}
