import { type ReactElement, memo, useRef } from "react";
import { ActualCheckBox } from "./ActualCheckBox";
import { CheckBoxTextContent } from "./CheckBoxTextContent";
import { Box } from "@gluestack-ui/themed";
import { DueDate } from "./DueDate";
import { ToDoContainer } from "../wrappers/ToDoContainer";
import { useHandleCheckBoxOnChange } from "../hooks/useHandleCheckBoxOnChange";

export function Component(props: todoComponentProps): ReactElement {
  const { value, dueDate, id, isCompleted } = props;
  const textCrossingAnimationDuration = useRef(100);
  const [tempCompleted, handleOnChange] = useHandleCheckBoxOnChange(
    id,
    isCompleted,
    textCrossingAnimationDuration.current,
  );
  return (
    <ToDoContainer
      value={value}
      dueDate={dueDate}
      isCompleted={isCompleted}
      id={id}>
      <ActualCheckBox
        handleOnChange={handleOnChange}
        completed={tempCompleted}
        value={value}
        id={id}
      />
      <Box marginLeft={5}>
        <CheckBoxTextContent
          isTodoCompleted={tempCompleted}
          animationDuration={textCrossingAnimationDuration.current}
          value={value}
        />
        <DueDate dueDate={dueDate} />
      </Box>
    </ToDoContainer>
  );
}
export const ToDo = memo(Component);
