// interfaces
interface Itodo {
  id: string;
  value: string;
  isCompleted: boolean;
  remarks?: string;
  dueDate?: string;
  dueTime?: string;
}

// types
type todosGroupsNames = "overdue" | "later" | "no date" | "completed";
type dateTimePickerMode = "date" | "time";
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
  dueTime?: string;
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

type useDynamicRouteReturnType = [
  id: string,
  isCompleted: string,
  value: string,
  navigation: NavigationProp<ReactNavigation.RootParamList>,
  remarks?: string,
  initialDateTime?: Date,
];

type addModalFooterProps = {
  todoValue: string;
  closeModal: () => void;
  date: Date;
  isDateTimeEnabled: boolean;
  setTodoValue: Dispatch<SetStateAction<string>>;
  setIsDateTimeEnabled: Dispatch<SetStateAction<boolean>>;
};
