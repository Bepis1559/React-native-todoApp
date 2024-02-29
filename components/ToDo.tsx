import { useState, type ReactElement, useRef } from "react";
import { Motion } from "@legendapp/motion";
import { ActualCheckBox } from "./ActualCheckBox";
import { CheckBoxTextContent } from "./CheckBoxTextContent";
import { Box } from "@gluestack-ui/themed";
import { todoStyle } from "../app/styles/ToDo";

type props = {
  id: string;
  value: string;
  dueDate?: string;
};
export function ToDo({ value, dueDate, id }: props): ReactElement {
  const [completed, setCompleted] = useState(false);

  const labelCrossingAnimationDuration = useRef(300);
  const todoAnimationTime = useRef(700);
  const handleOnChange = () => setCompleted((prev) => !prev);
  // add modal on click
  // add submit to db button , later on

  return (
    <Motion.Pressable>
      <Motion.View whileTap={{ scale: 0.95 }}>
        <Motion.View
          animate={{ y: completed ? 300 : 0 }}
          transition={{
            type: "timing",
            duration: todoAnimationTime.current,
            easing: "linear",
            delay: labelCrossingAnimationDuration.current * 1.5,
          }}>
          <Box style={todoStyle}>
            <ActualCheckBox
              value={value}
              handleOnChange={handleOnChange}
              id={id}
            />
            <CheckBoxTextContent
              isTodoCompleted={completed}
              animationDuration={labelCrossingAnimationDuration.current}
              value={value}
              dueDate={dueDate}
            />
          </Box>
        </Motion.View>
      </Motion.View>
    </Motion.Pressable>
  );
}
