import { useCallback, useState } from "react";
import { useAllTodos } from "./useAllTodos";

type returnType = [refreshing: boolean, onRefresh: () => void];
export function useRefresh(): returnType {
  const [refreshing, setRefreshing] = useState(false);
  const [, refreshTodos] = useAllTodos();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refreshTodos().then(() => setRefreshing(false));
  }, [refreshTodos]);

  return [refreshing, onRefresh];
}
