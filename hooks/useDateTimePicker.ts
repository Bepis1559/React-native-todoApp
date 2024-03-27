import {
  DateTimePickerAndroid,
  type DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useCallback, useState } from "react";

type mode = "date" | "time";

type returnType = [showMode: (currentMode: mode) => void, date: Date];
export function useDateTimePicker(): returnType {
  const [date, setDate] = useState(new Date());

  const onChange = useCallback(
    (event: DateTimePickerEvent, selectedDate?: Date) => {
      const currentDate = selectedDate;
      setDate(currentDate ?? new Date());
    },
    [setDate],
  );

  const showMode = useCallback(
    (currentMode: mode) => {
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
