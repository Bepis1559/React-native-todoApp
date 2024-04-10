import type { Dispatch, SetStateAction } from "react";
import { schedulePushNotification } from "./schedulePushNotification";

export async function attachNotificationToTodo(
  isDateTimeEnabled: boolean,
  todoId: string,
  setTodosAndNotificationIds: Dispatch<SetStateAction<Map<string, string>>>,
  todoValue: string,
  date: Date,
) {
  if (isDateTimeEnabled) {
    const notificationId = await schedulePushNotification(todoValue, date);
    setTodosAndNotificationIds((prev) => {
      const newMap = new Map(prev);
      newMap.set(todoId, notificationId);
      return newMap;
    });
  }
}
