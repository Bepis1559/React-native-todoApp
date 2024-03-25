import { TodoModel } from "../models/TodoModel";
import { getToDoReadyFormattedDate } from "./getToDoReadyFormattedDate";

const date1 = getToDoReadyFormattedDate(2022, 1, 25, 13, 7);
const date2 = getToDoReadyFormattedDate(2024, 4, 17, 17, 24);
const date3 = getToDoReadyFormattedDate(2026, 10, 13, 13, 11);
const date4 = getToDoReadyFormattedDate(2021, 12, 22, 7, 30);
const date5 = getToDoReadyFormattedDate(2024, 0, 7, 13, 9);
const date6 = getToDoReadyFormattedDate(2024, 2, 7, 17, 13);

export function getTodos() {
  const todo3 = new TodoModel("Take a walk", date1);
  const todo4 = new TodoModel("Read a book", date4);
  const todo5 = new TodoModel("Watch a movie", date3);
  const todo6 = new TodoModel("Try a new recipe", date2);
  const todo7 = new TodoModel("Go for a run", date1);
  const todo8 = new TodoModel("Do some gardening", date2);
  const todo9 = new TodoModel("Relax and unwind");
  const todo10 = new TodoModel("Listen to music");
  const todo11 = new TodoModel("Practice a hobby");
  const todo12 = new TodoModel("Go for a ride");
  const todo13 = new TodoModel("Explore a new place");
  const todo14 = new TodoModel("Buy bread", date3);
  const todo15 = new TodoModel("Go to gym", undefined, "Should be done daily");
  const todo16 = new TodoModel("Finish project");
  const todo17 = new TodoModel("Build cool stuff");
  const todo18 = new TodoModel("coming soon", date5);
  const todo19 = new TodoModel("right about now", date6);
  const todo20 = new TodoModel("Last one");

  const allTodos = [
    new TodoModel("Buy groceries", date1),
    new TodoModel("Call a friend", date4),
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
    todo18,
    todo19,
    todo20,
  ];

  return allTodos;
}
