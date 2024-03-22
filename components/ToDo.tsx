import { type ReactElement, memo, useRef, useCallback } from "react";
import { CheckBox } from "./CheckBox";
import { TodoContent } from "./TodoContent";
import { Box } from "@gluestack-ui/themed";
import { DueDate } from "./DueDate";
import { ToDoContainer } from "../wrappers/ToDoContainer";
import { useHandleCheckBoxOnChange } from "../hooks/useHandleCheckBoxOnChange";
import { configureTodosLayoutAnimation } from "../helpers/configureTodosLayoutAnimation";

function Component(props: todoComponentProps): ReactElement {
  const { value, dueDate, id, isCompleted } = props;
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
      value={value}
      dueDate={dueDate}
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
        <DueDate dueDate={dueDate} />
      </Box>
    </ToDoContainer>
  );
}
export const ToDo = memo(Component);
