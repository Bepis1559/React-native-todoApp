import { TodoModel } from "../models/TodoModel";

export function getTodos() {
  const todo3 = new TodoModel("Take a walk");
  const todo4 = new TodoModel("Read a book");
  const todo5 = new TodoModel("Watch a movie");
  const todo6 = new TodoModel("Try a new recipe");
  const todo7 = new TodoModel("Go for a run");
  const todo8 = new TodoModel("Do some gardening");
  const todo9 = new TodoModel("Relax and unwind");
  const todo10 = new TodoModel("Listen to music");
  const todo11 = new TodoModel("Practice a hobby");
  const todo12 = new TodoModel("Go for a ride");
  const todo13 = new TodoModel("Explore a new place");
  const todo14 = new TodoModel("Buy bread");
  const todo15 = new TodoModel("Go to gym");
  const todo16 = new TodoModel("Finish project");
  const todo17 = new TodoModel("Build cool stuff");
  const todo20 = new TodoModel("Last one");

  const allTodos = [
    new TodoModel("Buy groceries"),
    new TodoModel("Call a friend"),
    todo3,
    todo4,
    todo5,
    todo6,
    todo7,
    todo8,
    todo9,
    todo10,
    todo11,
    todo12,
    todo13,
    todo14,
    todo15,
    todo16,
    todo17,
    todo20,
  ];

  return allTodos;
}
