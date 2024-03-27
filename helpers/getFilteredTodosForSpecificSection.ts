import { isPast } from "date-fns";
import { type TodoModel } from "../models/TodoModel";
import { converDateAndTimeToDateObject } from "./converDateAndTimeToDateObject";

export function getOverdueTodos(todos: TodoModel[]) {
  return todos.filter(
    ({ dueDate, dueTime, isCompleted }) =>
      dueDate &&
      dueTime &&
      isPast(converDateAndTimeToDateObject(dueDate, dueTime)) &&
      !isCompleted,
  );
}

export function getLaterTodos(todos: TodoModel[]) {
  return todos.filter(
    ({ isCompleted, dueDate, dueTime }) =>
      dueDate &&
      dueTime &&
      !isPast(converDateAndTimeToDateObject(dueDate, dueTime)) &&
      !isCompleted,
  );
}

export function getNoDateTodos(todos: TodoModel[]) {
  return todos.filter(
    ({ dueDate, dueTime, isCompleted }) => !dueDate && !isCompleted && !dueTime,
  );
}

export function getCompletedTodos(todos: TodoModel[]) {
  return todos.filter(({ isCompleted }) => isCompleted);
}
