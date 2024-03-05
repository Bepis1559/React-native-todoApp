import { Motion } from "@legendapp/motion";
import { router } from "expo-router";
import { type ReactNode, type ReactElement, memo, useRef } from "react";
import { todoStyle } from "../styles/ToDoStyle";

type ToDoContainerProps = {
  id: string;
  children: ReactNode;
};
function Component({ children, id }: ToDoContainerProps): ReactElement {
  return (
    <Motion.Pressable>
      <Motion.View>
        <Motion.Pressable onPress={() => router.push(`todos/${id}`)}>
          <Motion.View style={todoStyle} whileTap={{ scale: 0.9 }}>
            {children}
          </Motion.View>
        </Motion.Pressable>
      </Motion.View>
    </Motion.Pressable>
  );
}
export const ToDoContainer = memo(Component);
