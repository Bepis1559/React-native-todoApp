import { Motion } from "@legendapp/motion";
import { router } from "expo-router";
import { type ReactNode, type ReactElement, useRef } from "react";
import { todoStyle } from "../styles/ToDo";

type ToDoContainerProps = {
  id: string;
  children: ReactNode;
  completed: boolean;
  labelCrossingAnimationDuration: number;
};
export function ToDoContainer({
  children,
  id,
  completed,
  labelCrossingAnimationDuration,
}: ToDoContainerProps): ReactElement {
  const todoAnimationTime = useRef(700);
  const dynamicPageRoute = useRef(`todos/${id}`);

  return (
    <Motion.Pressable>
      <Motion.View
        animate={{ y: completed ? 300 : 0 }}
        transition={{
          type: "timing",
          duration: todoAnimationTime.current,
          easing: "linear",
          delay: labelCrossingAnimationDuration * 1.5,
        }}>
        <Motion.Pressable onPress={() => router.push(dynamicPageRoute.current)}>
          <Motion.View style={todoStyle} whileTap={{ scale: 0.9 }}>
            {children}
          </Motion.View>
        </Motion.Pressable>
      </Motion.View>
    </Motion.Pressable>
  );
}
