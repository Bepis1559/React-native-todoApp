import { Box, Text } from "@gluestack-ui/themed";
import { AnimatedTextCross } from "./AnimatedTextCross";
import { type ReactElement } from "react";
import { TextCrossBoxStyle } from "../styles/CheckBoxTextContent";

type CheckBoxTextContentProps = {
  isTodoCompleted: boolean;
  animationDuration: number;
  value: string;
};

export function CheckBoxTextContent({
  isTodoCompleted,
  animationDuration,
  value,
}: CheckBoxTextContentProps): ReactElement {
  return (
    <Box alignSelf="flex-start">
      <Box style = {TextCrossBoxStyle}>
        <AnimatedTextCross
          isTodoCompleted={isTodoCompleted}
          animationDuration={animationDuration}
        />
      </Box>
      <Text mr={10} numberOfLines={1} ellipsizeMode="tail">
        {value}
      </Text>
    </Box>
  );
}
