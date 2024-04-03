import { useEffect, useState } from "react";
import { getTodos } from "../helpers/firebase_crud";
import { useSetAtom } from "jotai";
import { allTodosAtom } from "../context/allTodosContext";

export function useSetTodosToDbData() {
  const [isLoading, setIsLoading] = useState(true);
  const setAllTodos = useSetAtom(allTodosAtom);

  useEffect(() => {
    async function updateTodos() {
      const todosFromDb = await getTodos();
      setAllTodos(todosFromDb);
      setIsLoading(false);
    }
    updateTodos();
  }, []);

  return [isLoading];
}
