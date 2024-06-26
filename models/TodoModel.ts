import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
export class TodoModel implements Itodo {
  id: string;
  value: string;
  isCompleted: boolean;
  dueDate?: string;
  dueTime?: string;
  remarks?: string;

  constructor(
    id = uuidv4(),
    value: string,
    dueDate = "",
    dueTime = "",
    remarks = "",
    isCompleted = false,
  ) {
    this.id = id;
    this.value = value;
    this.isCompleted = isCompleted;
    this.dueDate = dueDate;
    this.dueTime = dueTime;
    this.remarks = remarks;
  }
}
