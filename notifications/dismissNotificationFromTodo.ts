import * as Notifications from "expo-notifications";
import type { Dispatch, SetStateAction } from "react";
export async function dismissNotificationFromTodo(
  todoId: string,
  setTodosAndNotificationIds: Dispatch<SetStateAction<Map<string, string>>>,
) {
  setTodosAndNotificationIds((prev) => {
    const newMap = new Map(prev);
    const notificationId = prev.get(todoId);
    if (notificationId) {
      Notifications.cancelScheduledNotificationAsync(notificationId);
      Notifications.dismissNotificationAsync(notificationId);
    }
    newMap.delete(todoId);
    return newMap;
  });
}
