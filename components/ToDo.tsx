import { type ReactElement, memo, useRef, useCallback } from "react";
import { CheckBox } from "./CheckBox";
import { TodoContent } from "./TodoContent";
import { Box } from "@gluestack-ui/themed";
import { DueDateTime } from "./DueDateTime";
import { ToDoContainer } from "../wrappers/ToDoContainer";
import { useHandleCheckBoxOnChange } from "../hooks/useHandleCheckBoxOnChange";
import { configureTodosLayoutAnimation } from "../helpers/configureTodosLayoutAnimation";

function Component(props: todoComponentProps): ReactElement {
  const { value, dueDate, dueTime, id, isCompleted, remarks } = props;
  const textCrossingAnimationDuration = useRef(100);
  const animationConfiguration = useCallback(
    () => configureTodosLayoutAnimation(textCrossingAnimationDuration.current),
    [],
  );
  const [tempCompleted, handleOnChange] = useHandleCheckBoxOnChange(
    id,
    isCompleted,
    textCrossingAnimationDuration.current,
    animationConfiguration,
  );
  return (
    <ToDoContainer
      dueTime={dueTime}
      dueDate={dueDate}
      remarks={remarks}
      value={value}
      isCompleted={isCompleted}
      id={id}>
      <CheckBox
        handleOnChange={handleOnChange}
        completed={tempCompleted}
        value={value}
        id={id}
      />
      <Box marginLeft={5}>
        <TodoContent
          isTodoCompleted={tempCompleted}
          animationDuration={textCrossingAnimationDuration.current}
          value={value}
        />
        <DueDateTime dueTime={dueTime} dueDate={dueDate} />
      </Box>
    </ToDoContainer>
  );
}
export const ToDo = memo(Component);
