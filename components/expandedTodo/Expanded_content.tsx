import { Box } from "@gluestack-ui/themed";
import { useRef, type ReactElement } from "react";
import { CheckBox } from "../CheckBox";
import { ExpandedTodoStyle } from "../../styles/ExpandedTodoStyle";
import { useHandleCheckBoxOnChange } from "../../hooks/useHandleCheckBoxOnChange";
import { TodoContent } from "../TodoContent";

export function Expanded_content(props: Expanded_contentProps): ReactElement {
  const { id, isCompleted, value } = props;
  const textCrossingAnimationDuration = useRef(150);
  const completed = isCompleted == "false" ? false : true;
  const [tempCompleted, handleOnChange] = useHandleCheckBoxOnChange(
    id,
    completed,
    textCrossingAnimationDuration.current,
  );
  return (
    <Box accessibilityLabel="CheckBoxAndText" style={ExpandedTodoStyle}>
      <CheckBox
        value={value}
        id={id}
        completed={tempCompleted}
        handleOnChange={handleOnChange}
      />
      <Box marginLeft={5}>
        <TodoContent
          isTodoCompleted={tempCompleted}
          animationDuration={textCrossingAnimationDuration.current}
          value={value}
        />
      </Box>
    </Box>
  );
}
