import { Motion } from "@legendapp/motion";
import { router, useFocusEffect } from "expo-router";
import { type ReactNode, type ReactElement, memo, useCallback } from "react";
import { todoStyle } from "../styles/ToDoStyle";
import { useAtom } from "jotai";
import { isNavigatingAtom } from "../context/routesContext";

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
  const [isNavigating, setIsNavigating] = useAtom(isNavigatingAtom);
  function handlePress() {
    if (!isNavigating) {
      setIsNavigating(true);
      router.push({
        pathname: `todos/${id}`,
        params: {
          dueDate,
          isCompleted,
          value,
        },
      });
    }
  }
  useFocusEffect(
    useCallback(() => {
      setIsNavigating(false);
    }, []),
  );
  return (
    <Motion.Pressable>
      <Motion.View>
        <Motion.Pressable onPress={handlePress}>
          <Motion.View style={todoStyle} whileTap={{ scale: 0.95 }}>
            {children}
          </Motion.View>
        </Motion.Pressable>
      </Motion.View>
    </Motion.Pressable>
  );
}
export const ToDoContainer = memo(Component);
