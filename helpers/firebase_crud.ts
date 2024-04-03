import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { TodoModel } from "../models/TodoModel";

const collectionName = "todos";
export async function addTodo(todo: TodoModel) {
  try {
    const { id, value, isCompleted, dueDate, dueTime, remarks } = todo;
    const todoObj: TodoModel = {
      id: id,
      value: value,
      isCompleted: isCompleted,
      dueDate: dueDate,
      dueTime: dueTime,
      remarks: remarks,
    };
    await setDoc(doc(db, collectionName, todo.id), todoObj);
  } catch (error) {
    console.error(error);
  }
}

export async function getTodos() {
  let todos;
  try {
    const collectionRef = collection(db, collectionName);
    const { docs } = await getDocs(collectionRef);
    todos = docs.map((doc) => doc.data()) as TodoModel[];
  } catch (error) {
    console.error(error);
  }
  return todos ?? [];
}

export async function updateTodo(id: string, updatedTodo: TodoModel) {
  try {
    const docRef = doc(db, collectionName, id);
    const newDoc = { ...updatedTodo };
    await updateDoc(docRef, newDoc);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteTodo(id: string) {
  try {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error(error);
  }
}
