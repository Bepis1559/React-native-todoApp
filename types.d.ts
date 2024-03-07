interface Itodo {
  id: string;
  value: string;
  isCompleted: boolean;
  dueDate?: string;
}

type todoComponentProps = {
  id: string;
  value: string;
  dueDate?: string;
  isCompleted: boolean;
};

type todosGroupsNames = "overdue" | "later" | "no date" | "completed";

type todosSection = {
  title: string;
  data: Todo[];
};
