import { useNavigation } from "expo-router";
import { useSetAtom } from "jotai";
import { allTodosAtom } from "../../context/allTodosContext";
import { useCallback } from "react";
import { todosAndNotificatioIdAtom } from "../../context/todosAndNotificationIdContext";
import { dismissNotificationFromTodo } from "../../notifications/dismissNotificationFromTodo";

type returnType = [deleteTodo: () => void];

export function useDeleteTodo(id: string): returnType {
  const navigation = useNavigation();
  const setTodosAndNotificationIds = useSetAtom(todosAndNotificatioIdAtom);

  const setAllTodos = useSetAtom(allTodosAtom);
  const deleteTodo = useCallback(() => {
    setAllTodos((prev) => prev.filter((todo) => todo.id != id));
    navigation.goBack();
    dismissNotificationFromTodo(id, setTodosAndNotificationIds);
  }, [setAllTodos, navigation]);

  return [deleteTodo];
}
