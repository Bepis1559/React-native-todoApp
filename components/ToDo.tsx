import { type ReactElement, memo, useState, useRef, useEffect } from "react";
import { ActualCheckBox } from "./ActualCheckBox";
import { CheckBoxTextContent } from "./CheckBoxTextContent";
import { Box } from "@gluestack-ui/themed";
import { CheckBoxDueDate } from "./CheckBoxDueDate";
import { ToDoContainer } from "../wrappers/ToDoContainer";
import { useAtom } from "jotai";
import { allTodosAtom } from "../context/todosContext";
import { LayoutAnimation } from "react-native";

type props = {
  id: string;
  value: string;
  dueDate?: string;
  isCompleted: boolean;
};
export function Component(props: props): ReactElement {
  const { value, dueDate, id, isCompleted } = props;
  const [tempCompleted, setTempCompleted] = useState(isCompleted);
  const [, setAllTodos] = useAtom(allTodosAtom);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);
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

  return (
    <ToDoContainer id={id}>
      <ActualCheckBox
        handleOnChange={handleOnChange}
        completed={tempCompleted}
        value={value}
        id={id}
      />
      <Box marginLeft={5}>
        <CheckBoxTextContent
          isTodoCompleted={tempCompleted}
          animationDuration={250}
          value={value}
        />
        <CheckBoxDueDate dueDate={dueDate} />
      </Box>
    </ToDoContainer>
  );
}
export const ToDo = memo(Component);
