import { Motion } from "@legendapp/motion";
import { router } from "expo-router";
import { type ReactNode, type ReactElement, memo } from "react";
import { todoStyle } from "../styles/ToDoStyle";

type toDoContainerProps = {
  children: ReactNode;
} & todoComponentProps;
function Component({
  children,
  id,
  dueDate,
  isCompleted,
  value,
}: toDoContainerProps): ReactElement {
  return (
    <Motion.Pressable>
      <Motion.View>
        <Motion.Pressable
          onPress={() =>
            router.push({
              pathname: `todos/${id}`,
              params: {
                dueDate,
                isCompleted,
                value,
              },
            })
          }>
          <Motion.View style={todoStyle} whileTap={{ scale: 0.9 }}>
            {children}
          </Motion.View>
        </Motion.Pressable>
      </Motion.View>
    </Motion.Pressable>
  );
}
export const ToDoContainer = memo(Component);
