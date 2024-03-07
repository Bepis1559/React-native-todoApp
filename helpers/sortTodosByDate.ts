import { type Todo } from "../models/Todo";
import { converStringDateToDateObject } from "./converStringDateToDateObject";

export function sortTodosByDate(todos: Todo[]) {
  return todos.sort(
    (a, b) =>
      converStringDateToDateObject(a.dueDate!).getTime() -
      converStringDateToDateObject(b.dueDate!).getTime(),
  );
}
