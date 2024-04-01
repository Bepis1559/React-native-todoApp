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

  return [handleDatePress, handleTimePress];
}
