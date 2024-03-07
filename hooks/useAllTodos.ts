import { useAtom } from "jotai";
import { allTodosAtom } from "../context/todosContext";
import { converStringDateToDateObject } from "../helpers/converStringDateToDateObject";
import { isPast } from "date-fns";
import { type Todo } from "../models/Todo";

export function useAllTodos() {
  const [allTodos] = useAtom(allTodosAtom);

  const sortTodosByDate = (todos: Todo[]) => {
    return todos.sort(
      (a, b) =>
        converStringDateToDateObject(b.dueDate!).getTime() -
        converStringDateToDateObject(a.dueDate!).getTime(),
    );
  };

  const sections: todosSection[] = [
    {
      title: "Overdue",
      data: sortTodosByDate(
        allTodos.filter(
          ({ dueDate, isCompleted }) =>
            dueDate &&
            isPast(converStringDateToDateObject(dueDate)) &&
            !isCompleted,
        ),
      ),
    },
    {
      title: "Later",
      data: sortTodosByDate(
        allTodos.filter(
          ({ isCompleted, dueDate }) =>
            dueDate &&
            !isPast(converStringDateToDateObject(dueDate)) &&
            !isCompleted,
        ),
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
