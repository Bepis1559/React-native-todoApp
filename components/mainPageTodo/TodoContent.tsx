import { Box } from "@gluestack-ui/themed";
import { memo, type ReactElement } from "react";
import { AnimatedTextCross } from "./AnimatedTextCross";
import { TodoText } from "./TodoText";

function Component(props: TodoContentProps): ReactElement {
  const { isTodoCompleted, animationDuration, value } = props;
  return (
    <Box alignSelf="flex-start">
      <AnimatedTextCross
        isTodoCompleted={isTodoCompleted}
        animationDuration={animationDuration}
      />
      <TodoText value={value} />
    </Box>
  );
}
export const TodoContent = memo(Component);