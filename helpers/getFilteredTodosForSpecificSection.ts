import { isPast } from "date-fns";
import { type Todo } from "../models/Todo";
import { converStringDateToDateObject } from "./converStringDateToDateObject";

export function getOverdueTodos(todos: Todo[]) {
  return todos.filter(
    ({ dueDate, isCompleted }) =>
      dueDate && isPast(converStringDateToDateObject(dueDate)) && !isCompleted,
  );
}

export function getLaterTodos(todos: Todo[]) {
  return todos.filter(
    ({ isCompleted, dueDate }) =>
      dueDate && !isPast(converStringDateToDateObject(dueDate)) && !isCompleted,
  );
}

export function getNoDateTodos(todos: Todo[]) {
  return todos.filter(({ dueDate, isCompleted }) => !dueDate && !isCompleted);
}

export function getCompletedTodos(todos: Todo[]) {
  return todos.filter(({ isCompleted }) => isCompleted);
}
