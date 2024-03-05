import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { LayoutAnimation } from "react-native";
import { allTodosAtom } from "../context/todosContext";

type returnType = [tempCompleted: boolean, handleOnChange: () => void];

export function useHandleCheckBoxOnChange(
  id: string,
  isCompleted: boolean,
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
    }, 50);
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
