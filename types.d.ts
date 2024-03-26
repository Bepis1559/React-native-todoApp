// interfaces
interface Itodo {
  id: string;
  value: string;
  isCompleted: boolean;
  remarks?: string;
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
  isCompleted: boolean;
  dueDate?: string;
  remarks?: string;
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

type baseExpandedProps = {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
  textColor: string;
};
type Expanded_contentProps = {
  completed: string;
  id: string;
} & baseExpandedProps;

type Expanded_TextContentProps = {
  completed: boolean;
} & baseExpandedProps;
