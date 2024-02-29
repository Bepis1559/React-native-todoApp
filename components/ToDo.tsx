import { useState, type ReactElement, useRef } from "react";
import { Motion } from "@legendapp/motion";
import { ActualCheckBox } from "./ActualCheckBox";
import { CheckBoxTextContent } from "./CheckBoxTextContent";

type props = {
  id: string;
  value: string;
  dueDate?: string;
};
export function ToDo({ value, dueDate, id }: props): ReactElement {
  const [completed, setCompleted] = useState(false);
  // ADD OVERDUE NEXT
  // add modal on click
  // add submit to db button , later on

  const labelCrossingAnimationDuration = useRef(300);
  const todoAnimationTime = useRef(1200);
  const verticalDistance = useRef(13.5);
  function handleOnChange() {
    setCompleted((prev) => !prev);
  }
  return (
    <Motion.View
      style={{
        flexDirection: "row",

        alignItems: "center",
        marginBottom: verticalDistance.current,
        paddingVertical: verticalDistance.current,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: "rgb(34, 34, 34)",
      }}
      animate={{ y: completed ? 300 : 0 }}
      transition={{
        type: "timing",
        duration: todoAnimationTime.current,
        easing: "linear",
        delay: labelCrossingAnimationDuration.current * 1.5,
      }}>
      <ActualCheckBox value={value} handleOnChange={handleOnChange} id={id} />
      <CheckBoxTextContent
        isTodoCompleted={completed}
        animationDuration={labelCrossingAnimationDuration.current}
        value={value}
        dueDate={dueDate}
      />
    </Motion.View>
  );
}
