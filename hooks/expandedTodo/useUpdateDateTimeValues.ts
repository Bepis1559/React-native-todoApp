import { useSetAtom } from "jotai";
import { useDateTimePicker } from "../useDateTimePicker";

import { allTodosAtom } from "../../context/allTodosContext";
import { useFocusEffect } from "expo-router";
import { isTodoDateTimeLoadingAtom } from "../../context/isTodoDateTimeLoading";
import {
  isDateTimePickerDismissedAtom,
  isTextContentInteractedWithAtom,
} from "../../context/expandedTodoContext";
import { useCallback } from "react";
import { Keyboard } from "react-native";

type returnType = [
  handleDatePress: () => void,
  handleTimePress: () => void,
  date: Date,
];

export function useUpdateDateTimeValues(
  id: string,
  isDateTimeEnabled: boolean,
  initialDateTime?: Date,
): returnType {
  const [showMode, date] = useDateTimePicker(initialDateTime);
  const setAllTodos = useSetAtom(allTodosAtom);
  const setIsTodoDataLoading = useSetAtom(isTodoDateTimeLoadingAtom);
  const setDismissed = useSetAtom(isDateTimePickerDismissedAtom);
  const setIsInteracting = useSetAtom(isTextContentInteractedWithAtom);

  const showDateTimePicker = useCallback(
    () => setDismissed(false),
    [setDismissed],
  );
  const handlePress = useCallback(() => {
    Keyboard.dismiss();
    setIsInteracting(false);
    showDateTimePicker();
  }, [Keyboard, showDateTimePicker]);

  const handleTimePress = useCallback(() => {
    handlePress();
    showMode("time");
  }, [handlePress, showMode]);

  const handleDatePress = useCallback(() => {
    handlePress();
    showMode("date");
  }, [handlePress, showMode]);
  useFocusEffect(() => {
    setIsTodoDataLoading(true);
    return () => {
      setAllTodos((prev) =>
        prev.map((todo) =>
          todo.id == id
            ? {
                ...todo,
                dueDate: isDateTimeEnabled ? date.toLocaleDateString() : "",
                dueTime: isDateTimeEnabled ? date.toLocaleTimeString() : "",
              }
            : todo,
        ),
      );
      setIsTodoDataLoading(false);
    };
  });

  return [handleDatePress, handleTimePress, date];
}
