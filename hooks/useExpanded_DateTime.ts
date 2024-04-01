import { useSetAtom } from "jotai";
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
  isDateTimeEnabled: boolean,
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
  const handlePress = useCallback(() => {
    Keyboard.dismiss();
    stopKeyboardInteraction();
    showDateTimePicker();
  }, [Keyboard, stopKeyboardInteraction, showDateTimePicker]);

  const handleTimePress = useCallback(() => {
    handlePress();
    showMode("time");
  }, [handlePress, showMode]);

  const handleDatePress = useCallback(() => {
    handlePress();
    showMode("date");
  }, [handlePress, showMode]);

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

  return [handleDatePress, handleTimePress, date];
}
