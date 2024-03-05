import { SectionList, Text, View } from "@gluestack-ui/themed";
import { type ReactElement } from "react";
import { useAtom } from "jotai";
import { allTodosAtom } from "../context/todosContext";
import { isPast } from "date-fns";
import { todoDateFormat } from "../helpers/todoDateFormat";
import { ToDo } from "./ToDo";
import { Todo } from "../models/Todo";

type section = {
  title: string;
  data: Todo[];
};
export function AllToDos(): ReactElement {
  const [allTodos] = useAtom(allTodosAtom);
  const sections: section[] = [
    {
      title: "Overdue",
      data: allTodos.filter(
        ({ dueDate, isCompleted }) =>
          dueDate && isPast(todoDateFormat(dueDate)) && !isCompleted,
      ),
    },
    {
      title: "Later",
      data: allTodos.filter(
        ({ isCompleted, dueDate }) =>
          dueDate && !isPast(todoDateFormat(dueDate)) && !isCompleted,
      ),
    },

    {
      title: "No date",
      data: allTodos.filter(
        ({ dueDate, isCompleted }) => !dueDate && !isCompleted,
      ),
    },
    {
      title: "Completed",
      data: allTodos.filter(({ isCompleted }) => isCompleted),
    },
  ];

  return (
    <SectionList
      marginBottom={0}
      paddingHorizontal={10}
      paddingTop={10}
      sections={sections}
      contentContainerStyle={{ paddingBottom: 60 }}
      ItemSeparatorComponent={() => <View height={15} />}
      keyExtractor={(item) => (item as Todo).id}
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
        const { title } = section as section;
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
