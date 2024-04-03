import { type TodoModel } from "../models/TodoModel";

export function areTodosEqual(todo1: TodoModel, todo2: TodoModel) {
  return (
    todo1.id === todo2.id &&
    todo1.value === todo2.value &&
    todo1.isCompleted === todo2.isCompleted &&
    todo1.dueDate === todo2.dueDate &&
    todo1.dueTime === todo2.dueTime &&
    todo1.remarks === todo2.remarks
  );
}
