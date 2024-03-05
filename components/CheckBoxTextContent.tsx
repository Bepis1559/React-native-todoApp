import { Box, Text } from "@gluestack-ui/themed";
import { AnimatedTextCross } from "./AnimatedTextCross";
import { useRef, type ReactElement } from "react";

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
      <Box position="absolute" top={0} left={0} right={10} bottom={0}>
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
