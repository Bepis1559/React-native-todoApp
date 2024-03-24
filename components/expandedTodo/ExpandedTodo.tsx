import { useRef, type ReactElement, memo } from "react";
import { Expanded_remarks } from "./Expanded_remarks";
import { Expanded_date } from "./Expanded_date";
import { Expanded_content } from "./Expanded_content";

function Component(props: expandedTodoProps): ReactElement {
  const { id, value, isCompleted, dueDate } = props;
  const textColor = useRef("#528deb");
  return (
    <>
      <Expanded_content
        id={id}
        isCompleted={isCompleted}
        value={value}
        textColor={textColor.current}
      />
      <Expanded_date textColor={textColor.current} dueDate={dueDate} />
      <Expanded_remarks textColor={textColor.current} />
    </>
  );
}

export const ExpandedTodo = memo(Component);
