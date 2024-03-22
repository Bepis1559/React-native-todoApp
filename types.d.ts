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

type ActualCheckBoxProps = {
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

type CheckBoxTextContentProps = {
  isTodoCompleted: boolean;
  animationDuration: number;
  value: string;
};

type AnimatedTextCrossProps = {
  isTodoCompleted: boolean;
  animationDuration: number;
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
};
