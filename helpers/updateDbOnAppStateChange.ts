import { type AppStateStatus } from "react-native";
import { addTodo, deleteTodo, getTodos, updateTodo } from "./firebase_crud";

import { TodoModel } from "../models/TodoModel";
import { areTodosEqual } from "./areTodosEqual";

export async function updateDbOnAppStateChange(
  appState: { current: AppStateStatus },
  nextAppState: AppStateStatus,
  finalStateTodos: TodoModel[],
) {
  if (nextAppState == "inactive" || nextAppState == "background") {
    console.log("App has gone to the background!");
    try {
      const todosFromDb = await getTodos();
      const finalStateTodos_ids = finalStateTodos.map(({ id }) => id);
      const todosFromDb_ids = todosFromDb.map(({ id }) => id);
      finalStateTodos.forEach(async (todo) => {
        // if todo's id from final state isn't present in db , then add that todo
        if (!todosFromDb_ids.includes(todo.id)) {
          addTodo(todo);
        } else {
          // if todo id from final state is present in db , then the current todo and the todo with the the same id from db
          // if they're not equal - update them
          if (
            !areTodosEqual(
              todo,
              todosFromDb.find((dbTodo) => dbTodo.id == todo.id) ??
                new TodoModel(""),
            )
          ) {
            await updateTodo(todo.id, todo);
          }
        }
      });
      todosFromDb.forEach(async ({ id }) => {
        if (!finalStateTodos_ids.includes(id)) {
          await deleteTodo(id);
        }
      });
    } catch (error) {
      console.error(error);
    }

    appState.current = nextAppState;
  }
}
