import { useSetAtom } from "jotai";
import { useDateTimePicker } from "./useDateTimePicker";

import { allTodosAtom } from "../context/allTodosContext";
import { useFocusEffect } from "expo-router";

type returnType = [date: Date];

export function useUpdateDateTimeValues(
  id: string,
  isDateTimeEnabled: boolean,
  initialDateTime?: Date,
): returnType {
  const [, date] = useDateTimePicker(initialDateTime);
  const setAllTodos = useSetAtom(allTodosAtom);

  useFocusEffect(() => {
    return () => {
      setAllTodos((prev) =>
        prev.map((todo) =>
          todo.id == id
            ? {
                ...todo,
                dueDate: isDateTimeEnabled
                  ? date.toLocaleDateString()
                  : undefined,
                dueTime: isDateTimeEnabled
                  ? date.toLocaleTimeString()
                  : undefined,
              }
            : todo,
        ),
      );
    };
  });

  return [date];
}
