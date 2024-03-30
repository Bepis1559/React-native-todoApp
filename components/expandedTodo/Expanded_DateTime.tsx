import { useFocusEffect } from "expo-router";
import { memo, type ReactElement } from "react";
import { useDateTimePicker } from "../../hooks/useDateTimePicker";
import { useSetAtom } from "jotai";
import { allTodosAtom } from "../../context/allTodosContext";
import {
  isDateTimePickerDismissedAtom,
  isTextContentInteractedWithAtom,
} from "../../context/expandedTodoContext";
import {
  Box,
  Button,
  ButtonIcon,
  CalendarDaysIcon,
  ClockIcon,
  Text,
} from "@gluestack-ui/themed";
import {
  Date_Time_IconsStyle,
  ExpanedTodoDateStyle,
} from "../../styles/ExpandedTodoStyle";
import { Keyboard } from "react-native";

type props = {
  id: string;
  textColor: string;
  initialDateTime?: Date;
};
function Component(props: props): ReactElement {
  const { textColor, id, initialDateTime } = props;
  const [showMode, date] = useDateTimePicker(initialDateTime);
  const setDismissed = useSetAtom(isDateTimePickerDismissedAtom);
  const setAllTodos = useSetAtom(allTodosAtom);
  const setIsInteracting = useSetAtom(isTextContentInteractedWithAtom);

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

  return (
    <>
      <Box style={ExpanedTodoDateStyle} accessibilityLabel="Date">
        <Button
          onPress={() => {
            Keyboard.dismiss();
            setIsInteracting(false);
            showMode("date");
            setDismissed(false);
          }}
          backgroundColor="transparent"
          paddingHorizontal={5}>
          <ButtonIcon style={Date_Time_IconsStyle} as={CalendarDaysIcon} />
        </Button>
        <Text marginLeft={5} color={textColor}>
          {date ? date.toLocaleDateString() : "Set Date"}
        </Text>
      </Box>

      <Box style={ExpanedTodoDateStyle} accessibilityLabel="Time">
        <Button
          onPress={() => {
            Keyboard.dismiss();
            setIsInteracting(false);
            showMode("time");
            setDismissed(false);
          }}
          backgroundColor="transparent"
          paddingHorizontal={5}>
          <ButtonIcon style={Date_Time_IconsStyle} as={ClockIcon} />
        </Button>
        <Text marginLeft={5} color={textColor}>
          {date ? date.toLocaleTimeString() : "Set Time"}
        </Text>
      </Box>
    </>
  );
}

export const Expanded_DateTime = memo(Component);
