import { useAtom } from "jotai";
import { allTodosAtom } from "../context/todosContext";
import { todoDateFormat } from "../helpers/todoDateFormat";
import { isPast } from "date-fns";

export function useAllTodos() {
  const [allTodos] = useAtom(allTodosAtom);
  const sections: todosSection[] = [
    {
      title: "Overdue",
      data: allTodos.filter(
        ({ dueDate, isCompleted }) =>
          dueDate && isPast(todoDateFormat(dueDate)) && !isCompleted,
      ),
    },
    {
      title: "Later",
      data: allTodos.filter(
        ({ isCompleted, dueDate }) =>
          dueDate && !isPast(todoDateFormat(dueDate)) && !isCompleted,
      ),
    },

    {
      title: "No date",
      data: allTodos.filter(
        ({ dueDate, isCompleted }) => !dueDate && !isCompleted,
      ),
    },
    {
      title: "Completed",
      data: allTodos.filter(({ isCompleted }) => isCompleted),
    },
  ];

  return [sections];
}
