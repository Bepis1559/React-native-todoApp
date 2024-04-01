import { useSetAtom } from "jotai";
import { useDateTimePicker } from "./useDateTimePicker";
import {
  isDateTimePickerDismissedAtom,
  isTextContentInteractedWithAtom,
} from "../context/expandedTodoContext";
import { useCallback } from "react";
import { Keyboard } from "react-native";

type returnType = [handleDatePress: () => void, handleTimePress: () => void];

export function useDateTimePickersInteraction(
  initialDateTime?: Date,
): returnType {
  const [showMode] = useDateTimePicker(initialDateTime);
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

  return [handleDatePress, handleTimePress];
}
