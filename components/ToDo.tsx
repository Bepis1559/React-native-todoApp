import { type ReactElement, memo } from "react";
import { ActualCheckBox } from "./ActualCheckBox";
import { CheckBoxTextContent } from "./CheckBoxTextContent";
import { Box } from "@gluestack-ui/themed";
import { CheckBoxDueDate } from "./CheckBoxDueDate";
import { ToDoContainer } from "../wrappers/ToDoContainer";
import { useHandleCheckBoxOnChange } from "../hooks/useHandleCheckBoxOnChange";

type props = {
  id: string;
  value: string;
  dueDate?: string;
  isCompleted: boolean;
};
export function Component(props: props): ReactElement {
  const { value, dueDate, id, isCompleted } = props;
  const [tempCompleted, handleOnChange] = useHandleCheckBoxOnChange(
    id,
    isCompleted,
  );
  return (
    <ToDoContainer id={id}>
      <ActualCheckBox
        handleOnChange={handleOnChange}
        completed={tempCompleted}
        value={value}
        id={id}
      />
      <Box marginLeft={5}>
        <CheckBoxTextContent
          isTodoCompleted={tempCompleted}
          animationDuration={250}
          value={value}
        />
        <CheckBoxDueDate dueDate={dueDate} />
      </Box>
    </ToDoContainer>
  );
}
export const ToDo = memo(Component);
