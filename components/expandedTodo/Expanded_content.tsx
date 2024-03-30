import { Box } from "@gluestack-ui/themed";
import { memo, type ReactElement } from "react";
import { CheckBox } from "../CheckBox";
import { ExpandedTodoStyle } from "../../styles/ExpandedTodoStyle";
import { useHandleCheckBoxOnChange } from "../../hooks/useHandleCheckBoxOnChange";
import { Expanded_TextContent } from "./Expanded_TextContent";

function Component(props: Expanded_contentProps): ReactElement {
  const { id, textColor, completed, content, setContent } = props;
  const [tempCompleted, handleOnChange] = useHandleCheckBoxOnChange(
    id,
    completed == "false" ? false : true,
  );
  return (
    <Box style={ExpandedTodoStyle}>
      <CheckBox
        value={content}
        id={id}
        completed={tempCompleted}
        handleOnChange={handleOnChange}
      />
      <Expanded_TextContent
        setContent={setContent}
        completed={tempCompleted}
        textColor={textColor}
        content={content}
      />
    </Box>
  );
}

export const Expanded_content = memo(Component);
