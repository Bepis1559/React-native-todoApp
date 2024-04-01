import { useAtomValue } from "jotai";
import { allTodosAtom } from "../context/allTodosContext";
import { sortTodosByDate } from "../helpers/sortTodosByDate";
import {
  getCompletedTodos,
  getLaterTodos,
  getNoDateTodos,
  getOverdueTodos,
} from "../helpers/getFilteredTodosForSpecificSection";
import { useMemo } from "react";

type returnType = [todosSection[]];
export function useTodosSections(): returnType {
  const allTodos = useAtomValue(allTodosAtom);

  const overdueTodos = useMemo(() => getOverdueTodos(allTodos), [allTodos]);
  const laterTodos = useMemo(() => getLaterTodos(allTodos), [allTodos]);
  const noDateTodos = useMemo(() => getNoDateTodos(allTodos), [allTodos]);
  const completedTodos = useMemo(() => getCompletedTodos(allTodos), [allTodos]);

  const sections: todosSection[] = useMemo(
    () => [
      {
        title: "Overdue",
        data: sortTodosByDate(overdueTodos),
      },
      {
        title: "Later",
        data: sortTodosByDate(laterTodos),
      },
      {
        title: "No date",
        data: noDateTodos,
      },
      {
        title: "Completed",
        data: completedTodos,
      },
    ],

    [overdueTodos, laterTodos, noDateTodos, completedTodos],
  );

  return [sections];
}
