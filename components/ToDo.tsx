import { useState, type ReactElement, useRef } from "react";
import { ActualCheckBox } from "./ActualCheckBox";
import { CheckBoxTextContent } from "./CheckBoxTextContent";
import { Box } from "@gluestack-ui/themed";
import { CheckBoxDueDate } from "./CheckBoxDueDate";
import { ToDoContainer } from "../wrappers/ToDoContainer";

type props = {
  id: string;
  value: string;
  dueDate?: string;
};
export function ToDo({ value, dueDate, id }: props): ReactElement {
  const [completed, setCompleted] = useState(false);
  const labelCrossingAnimationDuration = useRef(300);

  const handleOnChange = () => setCompleted((prev) => !prev);

  return (
    <ToDoContainer
      id={id}
      completed={completed}
      labelCrossingAnimationDuration={labelCrossingAnimationDuration.current}>
      <ActualCheckBox value={value} handleOnChange={handleOnChange} id={id} />
      <Box marginLeft={5}>
        <CheckBoxTextContent
          isTodoCompleted={completed}
          animationDuration={labelCrossingAnimationDuration.current}
          value={value}
        />
        <CheckBoxDueDate dueDate={dueDate} />
      </Box>
    </ToDoContainer>
  );
}
