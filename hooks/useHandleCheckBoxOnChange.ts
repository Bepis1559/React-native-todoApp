import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { LayoutAnimation, Platform, UIManager } from "react-native";
import { allTodosAtom } from "../context/todosContext";

type returnType = [tempCompleted: boolean, handleOnChange: () => void];

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
export function useHandleCheckBoxOnChange(
  id: string,
  isCompleted: boolean,
  timeout: number,
): returnType {
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [, setAllTodos] = useAtom(allTodosAtom);
  const [tempCompleted, setTempCompleted] = useState(isCompleted);

  function handleOnChange() {
    setTempCompleted((prev) => !prev);
    timeoutId.current = setTimeout(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

      setAllTodos((prev) => {
        return prev.map((todo) => {
          if (todo.id === id) {
            return { ...todo, isCompleted: !isCompleted };
          } else {
            return todo;
          }
        });
      });
    }, timeout);
  }

  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  return [tempCompleted, handleOnChange];
}
