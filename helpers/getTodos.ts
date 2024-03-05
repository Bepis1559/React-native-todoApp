import { Todo } from "./../models/Todo";
import { formatDate } from "./formatDate";

const date1 = formatDate(new Date(2022, 1, 25, 13, 7));
const date2 = formatDate(new Date(2024, 4, 17, 17, 24));
const date3 = formatDate(new Date(2026, 10, 13, 13, 11));
const date4 = formatDate(new Date(2021, 12, 22, 7, 30));
export function getTodos() {
  const todo1 = new Todo("Buy groceries", date1);
  const todo2 = new Todo("Call a friend", date4);
  const todo3 = new Todo("Take a walk", date1);
  const todo4 = new Todo("Read a book", date4);
  const todo5 = new Todo("Watch a movie", date3);
  const todo6 = new Todo("Try a new recipe", date2);
  const todo7 = new Todo("Go for a run", date1);
  const todo8 = new Todo("Do some gardening", date2);
  const todo9 = new Todo("Relax and unwind");
  const todo10 = new Todo("Listen to music");
  const todo11 = new Todo("Practice a hobby");
  const todo12 = new Todo("Explore a new place");
  const todo13 = new Todo("Explore a new place");
  const todo14 = new Todo("Explore a new place", date3);
  const todo15 = new Todo("Explore a new place");
  const todo16 = new Todo("Explore a new place");
  const todo17 = new Todo("Explore a new place");
  const todo18 = new Todo("Last one");

  const allTodos = [
    todo1,
    // todo2,
    todo3,
    todo4,
    todo5,
    todo6,
    // todo7,
    // todo8,
    // todo9,
    todo10,
    todo11,
    todo12,
    todo13,
    todo14,
    todo15,
    todo16,
    todo17,
    todo18,
  ];

  return allTodos;
}
