import {
  DateTimePickerAndroid,
  type DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useSetAtom } from "jotai";
import { useCallback, useState } from "react";
import { isDateTimePickerDismissedAtom } from "../context/expandedTodoContext";

type returnType = [
  showMode: (currentMode: dateTimePickerMode) => void,
  date: Date,
];
export function useDateTimePicker(initialDateObject?: Date): returnType {
  const [date, setDate] = useState<Date>(initialDateObject ?? new Date());
  const setDismissed = useSetAtom(isDateTimePickerDismissedAtom);
  const onChange = useCallback(
    (event: DateTimePickerEvent, selectedDate?: Date) => {
      if (event.type == "dismissed") setDismissed(true);
      const currentDate = selectedDate;
      setDate(currentDate ?? new Date());
    },
    [setDate],
  );

  const showMode = useCallback(
    (currentMode: dateTimePickerMode) => {
      DateTimePickerAndroid.open({
        minimumDate: new Date(),
        positiveButton: {
          textColor: "#333",
        },
        negativeButton: {
          textColor: "#333",
        },
        value: date,
        onChange,
        mode: currentMode,
        is24Hour: true,
      });
    },
    [date, onChange],
  );

  return [showMode, date];
}
