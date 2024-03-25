import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
export class TodoModel implements Itodo {
  id: string;
  value: string;
  isCompleted: boolean;
  dueDate?: string;
  remarks?: string;

  constructor(
    value: string,
    dueDate?: string,
    remarks?: string,
    isCompleted = false,
  ) {
    this.id = uuidv4();
    this.value = value;
    this.isCompleted = isCompleted;
    this.dueDate = dueDate;
    this.remarks = remarks;
  }
}
