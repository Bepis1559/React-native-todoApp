import { useFocusEffect } from "expo-router";
import { dismissNotificationFromTodo } from "./dismissNotificationFromTodo";
import { useSetAtom } from "jotai";
import { todosAndNotificatioIdAtom } from "../context/todosAndNotificationIdContext";
import { attachNotificationToTodo } from "./attachNotificationToTodo";

export function useUpdateNotification(
  todoId: string,
  isDateTimeEnabled: boolean,
  todoValue: string,
  date: Date,
) {
  const setTodosAndNotificationIds = useSetAtom(todosAndNotificatioIdAtom);

  useFocusEffect(() => {
    return () => {
      dismissNotificationFromTodo(todoId, setTodosAndNotificationIds);
      attachNotificationToTodo(
        isDateTimeEnabled,
        todoId,
        setTodosAndNotificationIds,
        todoValue,
        date,
      );
    };
  });
}
