import { Button, CheckIcon, Icon } from "@gluestack-ui/themed";
import { useSetAtom } from "jotai";
import { ReactElement, memo } from "react";
import { isTextContentInteractedWithAtom } from "../../context/expandedTodoContext";
import { getTextColor } from "../../styles/colors";
import { Keyboard } from "react-native";

type props = {
  isInteracting: boolean;
  content: string;
  remarks: string;
};

function Component({ isInteracting, content, remarks }: props): ReactElement {
  const setIsInteracting = useSetAtom(isTextContentInteractedWithAtom);
  return (
    <Button
      pointerEvents={isInteracting ? "auto" : "none"}
      backgroundColor="transparent"
      onPress={() => {
        console.log(content);
        console.log(remarks);
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
