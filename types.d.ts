// interfaces
interface Itodo {
  id: string;
  value: string;
  isCompleted: boolean;
  dueDate?: string;
}

// types
type todosGroupsNames = "overdue" | "later" | "no date" | "completed";

type todosSection = {
  title: string;
  data: Todo[];
};
// props
type todoComponentProps = {
  id: string;
  value: string;
  dueDate?: string;
  isCompleted: boolean;
};

type CheckBoxProps = {
  value: string;
  id: string;
  completed: boolean;
  handleOnChange(): void;
};

type toDoContainerProps = {
  children: ReactNode;
} & todoComponentProps;

type CheckBoxDueDateProps = {
  dueDate?: string;
};

type TodoContentProps = {
  isTodoCompleted: boolean;
  animationDuration: number;
  value: string;
};

type AnimatedTextCrossProps = {
  isTodoCompleted: boolean;
  animationDuration: number;
};

type todoTextProps = {
  value: string;
};
// expanded todo
type expandedTodoProps = Omit<todoComponentProps, "isCompleted"> & {
  isCompleted: string;
};
type Expanded_dateProps = {
  textColor: string;
  dueDate: string | undefined;
};

type Expanded_contentProps = {
  id: string;
  isCompleted: string;
  value: string;
  textColor: string;
};

type Expandend_TextContentProps = {
  tempCompleted: boolean;

  initialInputValue: string;
  textColor: string;
};
