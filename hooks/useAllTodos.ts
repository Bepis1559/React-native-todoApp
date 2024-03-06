import { useAtom } from "jotai";
import { allTodosAtom } from "../context/todosContext";
import { isDateOverdue } from "../helpers/todoDateFormat";

export function useAllTodos() {
  const [allTodos] = useAtom(allTodosAtom);
  const sections: todosSection[] = [
    {
      title: "Overdue",
      data: allTodos.filter(
        ({ dueDate, isCompleted }) =>
          dueDate && isDateOverdue(dueDate) && !isCompleted,
      ),
    },
    {
      title: "Later",
      data: allTodos.filter(
        ({ isCompleted, dueDate }) =>
          dueDate && !isDateOverdue(dueDate) && !isCompleted,
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
