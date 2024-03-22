import { Motion } from "@legendapp/motion";
import { router, useFocusEffect } from "expo-router";
import { type ReactElement, memo, useCallback } from "react";
import { todoStyle } from "../styles/ToDoStyle";
import { useAtom } from "jotai";
import { isNavigatingAtom } from "../context/routesContext";

function Component(props: toDoContainerProps): ReactElement {
  const [isNavigating, setIsNavigating] = useAtom(isNavigatingAtom);
  const { children, id, dueDate, isCompleted, value } = props;
  const handlePressMemoized = useCallback(() => {
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
  }, [isCompleted]);
  useFocusEffect(
    useCallback(() => {
      setIsNavigating(false);
    }, []),
  );
  return (
    <Motion.Pressable onPress={handlePressMemoized}>
      <Motion.View style={todoStyle} whileTap={{ scale: 0.95 }}>
        {children}
      </Motion.View>
    </Motion.Pressable>
  );
}
export const ToDoContainer = memo(Component);
