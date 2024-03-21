import { useRef, type ReactElement } from "react";

import { Expanded_remarks } from "./Expanded_remarks";
import { Expanded_date } from "./Expanded_date";
import { Expanded_content } from "./Expanded_content";

export function ExpandedTodo({
  id,
  value,
  isCompleted,
  dueDate,
}: expandedTodoProps): ReactElement {
  const textColor = useRef("#528deb");
  return (
    <>
      <Expanded_content id={id} isCompleted={isCompleted} value={value} />
      <Expanded_date textColor={textColor.current} dueDate={dueDate} />
      <Expanded_remarks textColor={textColor.current} />
    </>
  );
}
