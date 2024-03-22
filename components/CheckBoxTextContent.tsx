import { Box, Text } from "@gluestack-ui/themed";
import { AnimatedTextCross } from "./AnimatedTextCross";
import { memo, type ReactElement } from "react";

function Component(props: CheckBoxTextContentProps): ReactElement {
  const { isTodoCompleted, animationDuration, value } = props;
  return (
    <Box alignSelf="flex-start">
      <AnimatedTextCross
        isTodoCompleted={isTodoCompleted}
        animationDuration={animationDuration}
      />
      <Text mr={10} numberOfLines={1} ellipsizeMode="tail">
        {value}
      </Text>
    </Box>
  );
}
export const CheckBoxTextContent = memo(Component);
