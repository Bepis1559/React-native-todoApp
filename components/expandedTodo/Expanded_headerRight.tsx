import { Button, CheckIcon, Icon } from "@gluestack-ui/themed";
import { useSetAtom } from "jotai";
import { ReactElement, memo, useEffect, useRef } from "react";
import { isTextContentInteractedWithAtom } from "../../context/expandedTodoContext";
import { getTextColor } from "../../styles/colors";
import { Keyboard } from "react-native";
import { allTodosAtom } from "../../context/allTodosContext";

type props = {
  id: string;
  isInteracting: boolean;
  content: string;
  remarks?: string;
};

function Component({
  isInteracting,
  content,
  remarks,
  id,
}: props): ReactElement {
  const setIsInteracting = useSetAtom(isTextContentInteractedWithAtom);
  const setAllTodos = useSetAtom(allTodosAtom);

  return (
    <Button
      pointerEvents={isInteracting ? "auto" : "none"}
      backgroundColor="transparent"
      onPress={() => {
        setIsInteracting(false);
        Keyboard.dismiss();
        setAllTodos((prev) =>
          prev.map((todo) =>
            todo.id == id
              ? { ...todo, value: content, remarks: remarks }
              : todo,
          ),
        );
      }}>
      <Icon
        height={22}
        width={22}
        color={isInteracting ? getTextColor() : "transparent"}
        as={CheckIcon}
      />
    </Button>
  );
}

export const Expanded_headerRight = memo(Component);
