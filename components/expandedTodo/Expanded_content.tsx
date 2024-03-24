import { Box } from "@gluestack-ui/themed";
import { useRef, type ReactElement } from "react";
import { CheckBox } from "../CheckBox";
import { ExpandedTodoStyle } from "../../styles/ExpandedTodoStyle";
import { useHandleCheckBoxOnChange } from "../../hooks/useHandleCheckBoxOnChange";
import { Expanded_TextContent } from "./Expanded_TextContent";

export function Expanded_content(props: Expanded_contentProps): ReactElement {
  const { id, isCompleted, value, textColor } = props;
  const textCrossingAnimationDuration = useRef(150);
  const [tempCompleted, handleOnChange] = useHandleCheckBoxOnChange(
    id,
    isCompleted == "false" ? false : true,
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
      <Expanded_TextContent
        tempCompleted={tempCompleted}
        animationDuration={textCrossingAnimationDuration.current}
        textColor={textColor}
        initialInputValue={value}
      />
    </Box>
  );
}
