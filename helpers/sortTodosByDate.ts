import { type TodoModel } from "../models/TodoModel";
import { converStringDateToDateObject } from "./converStringDateToDateObject";

export function sortTodosByDate(todos: TodoModel[]) {
  return todos.sort(
    (a, b) =>
      converStringDateToDateObject(a.dueDate!).getTime() -
      converStringDateToDateObject(b.dueDate!).getTime(),
  );
}
