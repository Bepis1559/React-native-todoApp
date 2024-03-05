interface Itodo {
  id: string;
  value: string;
  isCompleted: boolean;
  dueDate?: string;
}
type todosGroupsNames = "overdue" | "later" | "no date" | "completed";

type todosSection = {
  title: string;
  data: Todo[];
};
