import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { type TodoModel } from "../models/TodoModel";

export async function addTodo(todo: TodoModel) {
  try {
    const collectionRef = collection(db, "todos");
    await addDoc(collectionRef, todo.toObject());
  } catch (error) {
    console.error(error);
  }
}
export async function getTodos() {
  let todos;
  try {
    const collectionRef = collection(db, "todos");
    const { docs } = await getDocs(collectionRef);
    todos = docs.map((doc) => doc.data()) as TodoModel[];
  } catch (error) {
    console.error(error);
  }
  return todos;
}

export async function updateTodo(id: string, updatedTodo: TodoModel) {
  try {
    const docRef = doc(db, "todos", id);
    const newDoc = { ...updatedTodo };
    await updateDoc(docRef, newDoc);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteTodo() {
  try {
    const docRef = doc(db, "todos", "Nl3mV3ktVUxT5hD34rHu");
    deleteDoc(docRef);
  } catch (error) {
    console.error(error);
  }
}
