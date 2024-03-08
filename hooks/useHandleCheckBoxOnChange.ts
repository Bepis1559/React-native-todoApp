import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { Platform, UIManager } from "react-native";
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
  configureTodosLayoutAnimation?: () => void,
): returnType {
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [, setAllTodos] = useAtom(allTodosAtom);
  const [tempCompleted, setTempCompleted] = useState(isCompleted);
  function handleTodos() {
    setAllTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !isCompleted };
        } else {
          return todo;
        }
      });
    });
  }

  function handleOnChange() {
    setTempCompleted((prev) => !prev);
    if (timeout <= 0) {
      handleTodos();
    } else {
      timeoutId.current = setTimeout(() => {
        configureTodosLayoutAnimation && configureTodosLayoutAnimation();
        handleTodos();
      }, timeout);
    }
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
