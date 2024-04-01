import { RefreshControl, SectionList } from "@gluestack-ui/themed";
import { type ReactElement, useCallback } from "react";
import { ToDo } from "../mainPageTodo/ToDo";
import type { TodoModel } from "../../models/TodoModel";
import { useTodosSections } from "../../hooks/useTodosSections";
import { useRefresh } from "../../hooks/useRefresh";
import { ItemSeparator } from "./ItemSeparator";
import { SectionTitle } from "./SectionTitle";

export function AllToDos(): ReactElement {
  const [sections] = useTodosSections();
  const [refreshing, onRefresh] = useRefresh();
  //@ts-ignore
  const renderItem = useCallback(({ item }) => {
    const { id, value, dueDate, dueTime, isCompleted, remarks } =
      item as TodoModel;
    return (
      <ToDo
        dueTime={dueTime}
        remarks={remarks}
        isCompleted={isCompleted}
        key={id}
        id={id}
        value={value}
        dueDate={dueDate}
      />
    );
  }, []);
  //@ts-ignore
  const renderSectionHeader = useCallback(({ section }) => {
    const { title } = section as todosSection;
    return <SectionTitle title={title} />;
  }, []);
  const itemSeparator = useCallback(() => <ItemSeparator />, []);
  return (
    <SectionList
      paddingHorizontal={10}
      paddingTop={10}
      sections={sections}
      contentContainerStyle={{ paddingBottom: 60 }}
      ItemSeparatorComponent={itemSeparator}
      keyExtractor={(item) => (item as TodoModel).id}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
}
