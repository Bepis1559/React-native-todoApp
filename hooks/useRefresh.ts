import { useCallback, useState } from "react";
import { useSetAtom } from "jotai";
// import { allTodosAtom } from "../context/allTodosContext";
import { getTodos } from "../helpers/firebase_crud";
import { allTodosAtom } from "../context/allTodosContext";

type returnType = [refreshing: boolean, onRefresh: () => void];
export function useRefresh(): returnType {
  const [refreshing, setRefreshing] = useState(false);
  const setAllTodos = useSetAtom(allTodosAtom);
  const refreshTodos = useCallback(async () => {
    setAllTodos(await getTodos());
  }, [setAllTodos]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refreshTodos().then(() => setRefreshing(false));
  }, [refreshTodos]);

  return [refreshing, onRefresh];
}
