import { Button, CheckIcon, Icon } from "@gluestack-ui/themed";
import { useSetAtom } from "jotai";
import { ReactElement, memo } from "react";
import {
  isEditingAtom,
  isTextContentInteractedWithAtom,
} from "../../context/expandedTodoContext";
import { getTextColor } from "../../styles/colors";
import { Keyboard } from "react-native";

type props = {
  isInteracting: boolean;
};

function Component({ isInteracting }: props): ReactElement {
  const setIsEditing = useSetAtom(isEditingAtom);

  const setIsInteracting = useSetAtom(isTextContentInteractedWithAtom);
  return (
    <Button
      pointerEvents={isInteracting ? "auto" : "none"}
      backgroundColor="transparent"
      onPress={() => {
        setIsEditing(false);
        setIsInteracting(false);
        Keyboard.dismiss();
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
