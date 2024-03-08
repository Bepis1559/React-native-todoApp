import { useRef, type ReactElement } from "react";
import { Box, Text } from "@gluestack-ui/themed";
import { ActualCheckBox } from "./ActualCheckBox";
import { useHandleCheckBoxOnChange } from "../hooks/useHandleCheckBoxOnChange";
import { CheckBoxTextContent } from "./CheckBoxTextContent";
import { TextInput } from "react-native";
import { todoStyle } from "../styles/ToDoStyle";

export function ExpandedTodo({
  id,
  value,
  isCompleted,
  dueDate,
}: expandedTodoProps): ReactElement {
  const textCrossingAnimationDuration = useRef(150);
  const completed = isCompleted == "false" ? false : true;
  const [tempCompleted, handleOnChange] = useHandleCheckBoxOnChange(
    id,
    completed,
    textCrossingAnimationDuration.current,
  );

  return (
    <>
      <Box marginHorizontal={10} style={todoStyle}>
        <ActualCheckBox
          value={value}
          id={id}
          completed={tempCompleted}
          handleOnChange={handleOnChange}
        />
        <CheckBoxTextContent
          isTodoCompleted={tempCompleted}
          animationDuration={textCrossingAnimationDuration.current}
          value={value}
        />
      </Box>
    </>
  );
}
