import { Motion } from "@legendapp/motion";
import { router, useFocusEffect } from "expo-router";
import { type ReactElement, memo, useCallback } from "react";
import { todoStyle } from "../styles/ToDoStyle";
import { useAtom, useSetAtom } from "jotai";
import { isNavigatingAtom } from "../context/routesContext";
import { isTextContentInteractedWithAtom } from "../context/expandedTodoContext";

function Component(props: toDoContainerProps): ReactElement {
  const [isNavigating, setIsNavigating] = useAtom(isNavigatingAtom);
  const { children, id, dueDate, isCompleted, value, remarks } = props;
  const setIsInteracting = useSetAtom(isTextContentInteractedWithAtom);
  const handlePressMemoized = useCallback(() => {
    if (!isNavigating) {
      setIsInteracting(false);
      setIsNavigating(true);
      router.push({
        pathname: `todos/${id}`,
        params: {
          dueDate,
          isCompleted,
          value,
          remarks,
        },
      });
    }
  }, [isNavigating]);
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
