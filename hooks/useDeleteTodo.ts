import { useNavigation } from "expo-router";
import { useSetAtom } from "jotai";
import { allTodosAtom } from "../context/allTodosContext";
import { useCallback } from "react";

type returnType = [deleteTodo: () => void];

export function useDeleteTodo(id: string): returnType {
  const navigation = useNavigation();

  const setAllTodos = useSetAtom(allTodosAtom);
  const deleteTodo = useCallback(() => {
    setAllTodos((prev) => prev.filter((todo) => todo.id != id));
    navigation.goBack();
  }, [setAllTodos, navigation]);

  return [deleteTodo];
}
