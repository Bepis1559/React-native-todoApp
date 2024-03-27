import { type TodoModel } from "../models/TodoModel";
import { converDateAndTimeToDateObject } from "./converDateAndTimeToDateObject";

export function sortTodosByDate(todos: TodoModel[]) {
  return todos.sort(
    (a, b) =>
      converDateAndTimeToDateObject(a.dueDate, a.dueTime).getTime() -
      converDateAndTimeToDateObject(b.dueDate, b.dueTime).getTime(),
  );
}
