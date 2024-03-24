import { Box } from "@gluestack-ui/themed";
import { type ReactElement } from "react";
import { CheckBox } from "../CheckBox";
import { ExpandedTodoStyle } from "../../styles/ExpandedTodoStyle";
import { useHandleCheckBoxOnChange } from "../../hooks/useHandleCheckBoxOnChange";
import { Expanded_TextContent } from "./Expanded_TextContent";

export function Expanded_content(props: Expanded_contentProps): ReactElement {
  const { id, isCompleted, value, textColor } = props;
  const [tempCompleted, handleOnChange] = useHandleCheckBoxOnChange(
    id,
    isCompleted == "false" ? false : true,
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
        textColor={textColor}
        initialInputValue={value}
      />
    </Box>
  );
}
