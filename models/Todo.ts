import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
export class Todo implements Itodo {
  id: string;
  value: string;
  isCompleted: boolean;
  dueDate?: string;

  constructor(value: string, dueDate?: string, isCompleted = false) {
    this.id = uuidv4();
    this.value = value;
    this.isCompleted = isCompleted;
    this.dueDate = dueDate;
  }
}
