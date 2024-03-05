import { atom } from "jotai";
import { getTodos } from "../helpers/getTodos";

const allTodos = getTodos();
export const allTodosAtom = atom(allTodos);
