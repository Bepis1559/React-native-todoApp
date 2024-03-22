import { ReactElement } from "react";
import { AppContainer } from "../../wrappers/AppContainer";
import { ExpandedTodo } from "../../components/expandedTodo/ExpandedTodo";
import { useLocalSearchParams } from "expo-router";

export default function Page(): ReactElement {
  const { id, isCompleted, value, dueDate } =
    useLocalSearchParams() as unknown as expandedTodoProps;
  return (
    <AppContainer>
      <ExpandedTodo
        id={id}
        isCompleted={isCompleted}
        value={value}
        dueDate={dueDate}
      />
    </AppContainer>
  );
}
