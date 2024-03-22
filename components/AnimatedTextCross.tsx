import { Box } from "@gluestack-ui/themed";
import { Motion } from "@legendapp/motion";
import { memo, type ReactElement } from "react";
import {
  TextCrossBoxStyle,
  TextCrossStyle,
} from "../styles/CheckBoxTextContent";

function Component(props: AnimatedTextCrossProps): ReactElement {
  const { isTodoCompleted, animationDuration } = props;
  return (
    <Box style={TextCrossBoxStyle}>
      <Motion.View
        animate={{ scaleX: isTodoCompleted ? 1 : 0 }}
        transition={{
          type: "timing",
          duration: animationDuration,
          easing: "linear",
        }}
        style={TextCrossStyle}></Motion.View>
    </Box>
  );
}

export const AnimatedTextCross = memo(Component);
