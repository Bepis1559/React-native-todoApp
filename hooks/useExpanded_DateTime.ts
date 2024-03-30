import { SetStateAction, useSetAtom } from "jotai";
import { useDateTimePicker } from "./useDateTimePicker";
import {
  isDateTimePickerDismissedAtom,
  isTextContentInteractedWithAtom,
} from "../context/expandedTodoContext";
import { allTodosAtom } from "../context/allTodosContext";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { Keyboard } from "react-native";

type returnType = [
  handleDatePress: () => void,
  handleTimePress: () => void,
  date: Date,
];

export function useExpanded_DateTime(
  id: string,
  initialDateTime?: Date,
): returnType {
  const [showMode, date] = useDateTimePicker(initialDateTime);
  const setDismissed = useSetAtom(isDateTimePickerDismissedAtom);
  const setAllTodos = useSetAtom(allTodosAtom);
  const setIsInteracting = useSetAtom(isTextContentInteractedWithAtom);

  const stopKeyboardInteraction = useCallback(
    () => setIsInteracting(false),
    [setIsInteracting],
  );
  const showDateTimePicker = useCallback(
    () => setDismissed(false),
    [setDismissed],
  );

  function handleTimePress() {
    Keyboard.dismiss();
    stopKeyboardInteraction();
    showMode("time");
    showDateTimePicker();
  }
  function handleDatePress() {
    Keyboard.dismiss();
    stopKeyboardInteraction();
    showMode("date");
    showDateTimePicker();
  }

  useFocusEffect(() => {
    return () => {
      setAllTodos((prev) =>
        prev.map((todo) =>
          todo.id == id
            ? {
                ...todo,
                dueDate: date.toLocaleDateString(),
                dueTime: date.toLocaleTimeString(),
              }
            : todo,
        ),
      );
    };
  });

  return [handleDatePress, handleTimePress, date];
}
