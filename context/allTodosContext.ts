import { atom } from "jotai";
import { TodoModel } from "../models/TodoModel";

export const allTodosAtom = atom<TodoModel[]>([]);
