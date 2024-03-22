import { isPast } from "date-fns";
import { type TodoModel } from "../models/TodoModel";
import { converStringDateToDateObject } from "./converStringDateToDateObject";

export function getOverdueTodos(todos: TodoModel[]) {
  return todos.filter(
    ({ dueDate, isCompleted }) =>
      dueDate && isPast(converStringDateToDateObject(dueDate)) && !isCompleted,
  );
}

export function getLaterTodos(todos: TodoModel[]) {
  return todos.filter(
    ({ isCompleted, dueDate }) =>
      dueDate && !isPast(converStringDateToDateObject(dueDate)) && !isCompleted,
  );
}

export function getNoDateTodos(todos: TodoModel[]) {
  return todos.filter(({ dueDate, isCompleted }) => !dueDate && !isCompleted);
}

export function getCompletedTodos(todos: TodoModel[]) {
  return todos.filter(({ isCompleted }) => isCompleted);
}
