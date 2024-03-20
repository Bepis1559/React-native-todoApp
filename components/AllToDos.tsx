import { RefreshControl, SectionList, Text, View } from "@gluestack-ui/themed";
import { type ReactElement } from "react";
import { ToDo } from "./ToDo";
import { Todo } from "../models/Todo";
import { useAllTodos } from "../hooks/useAllTodos";
import { useRefresh } from "../hooks/useRefresh";

export function AllToDos(): ReactElement {
  const [sections] = useAllTodos();
  const [refreshing, onRefresh] = useRefresh();

  return (
    <SectionList
      paddingHorizontal={10}
      paddingTop={10}
      sections={sections}
      contentContainerStyle={{ paddingBottom: 60 }}
      ItemSeparatorComponent={() => <View height={15} />}
      keyExtractor={(item) => (item as Todo).id}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      renderItem={({ item }) => {
        const { id, value, dueDate, isCompleted } = item as Todo;
        return (
          <ToDo
            isCompleted={isCompleted}
            key={id}
            id={id}
            value={value}
            dueDate={dueDate}
          />
        );
      }}
      renderSectionHeader={({ section }) => {
        const { title } = section as todosSection;
        return (
          <Text
            style={{
              textTransform: "uppercase",
              marginLeft: 5,
              marginTop: 10,
              marginBottom: 10,
            }}>
            {title}
          </Text>
        );
      }}
    />
  );
}
