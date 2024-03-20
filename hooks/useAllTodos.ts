import { useAtom } from "jotai";
import { allTodosAtom } from "../context/allTodosContext";
import { getTodos } from "../helpers/getTodos";
import { sortTodosByDate } from "../helpers/sortTodosByDate";
import {
  getCompletedTodos,
  getLaterTodos,
  getNoDateTodos,
  getOverdueTodos,
} from "../helpers/getFilteredTodosForSpecificSection";
import { useCallback } from "react";

type returnType = [todosSection[], () => Promise<void>];
export function useAllTodos(): returnType {
  const [allTodos, setAllTodos] = useAtom(allTodosAtom);

  const refreshTodos = useCallback(async () => {
    setAllTodos(getTodos());
  }, [setAllTodos]);

  const sections: todosSection[] = [
    {
      title: "Overdue",
      data: sortTodosByDate(getOverdueTodos(allTodos)),
    },
    {
      title: "Later",
      data: sortTodosByDate(getLaterTodos(allTodos)),
    },
    {
      title: "No date",
      data: getNoDateTodos(allTodos),
    },
    {
      title: "Completed",
      data: getCompletedTodos(allTodos),
    },
  ];

  return [sections, refreshTodos];
}
