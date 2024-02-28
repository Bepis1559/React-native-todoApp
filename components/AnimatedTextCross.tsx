import { Motion } from "@legendapp/motion";
import { type ReactElement } from "react";

type AnimatedTextCross = {
  isTodoCompleted: boolean;
  animationDuration: number;
};

export function AnimatedTextCross({
  isTodoCompleted,
  animationDuration,
}: AnimatedTextCross): ReactElement {
  return (
    <Motion.View
      animate={{ scaleX: isTodoCompleted ? 1 : 0 }}
      transition={{
        type: "timing",
        duration: animationDuration,
        easing: "linear",
      }}
      style={{
        width: "100%",
        height: 1,
        position: "absolute",
        backgroundColor: "white",
        left: 0,
        top: "50%",
        transformOrigin: "left",
      }}></Motion.View>
  );
}
