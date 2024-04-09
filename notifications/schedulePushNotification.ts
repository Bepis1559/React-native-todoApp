import * as Notifications from "expo-notifications";

export async function schedulePushNotification(
  todoValue: string,
  expirationDate: Date,
) {
  const notificationId = await Notifications.scheduleNotificationAsync({
    content: {
      title: "Todo expired ! 📬",
      body: todoValue,
      // data: { data: "goes here" },
    },
    trigger: expirationDate,
  });

  return notificationId;
}
