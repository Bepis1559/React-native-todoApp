import { Box, Text } from "@gluestack-ui/themed";
import { memo, type ReactElement } from "react";
import { AnimatedTextCross } from "./AnimatedTextCross";

function Component(props: TodoContentProps): ReactElement {
  const { isTodoCompleted, animationDuration, value } = props;
  return (
    <Box alignSelf="flex-start">
      <AnimatedTextCross
        isTodoCompleted={isTodoCompleted}
        animationDuration={animationDuration}
      />
      <Text
        color={isTodoCompleted ? "gray" : "white"}
        mr={10}
        numberOfLines={1}
        ellipsizeMode="tail">
        {value}
      </Text>
    </Box>
  );
}
export const TodoContent = memo(Component);
