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
    value: string,
    dueDate?: string,
    dueTime?: string,
    remarks?: string,
    isCompleted = false,
  ) {
    this.id = uuidv4();
    this.value = value;
    this.isCompleted = isCompleted;
    this.dueDate = dueDate;
    this.dueTime = dueTime;
    this.remarks = remarks;
  }

  toObject() {
    return {
      id: this.id,
      value: this.value,
      isCompleted: this.isCompleted,
      dueDate: this.dueDate,
      dueTime: this.dueTime,
      remarks: this.remarks,
    };
  }
}
