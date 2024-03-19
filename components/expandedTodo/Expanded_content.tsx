import { Box } from "@gluestack-ui/themed";
import { useRef, type ReactElement } from "react";
import { ActualCheckBox } from "../ActualCheckBox";
import { ExpandedTodoStyle } from "../../styles/ExpandedTodoStyle";
import { useHandleCheckBoxOnChange } from "../../hooks/useHandleCheckBoxOnChange";
import { CheckBoxTextContent } from "../CheckBoxTextContent";

type props = {
  id: string;
  isCompleted: string;
  value: string;
};
export function Expanded_content(props: props): ReactElement {
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
      <ActualCheckBox
        value={value}
        id={id}
        completed={tempCompleted}
        handleOnChange={handleOnChange}
      />
      <Box marginLeft={5}>
        <CheckBoxTextContent
          isTodoCompleted={tempCompleted}
          animationDuration={textCrossingAnimationDuration.current}
          value={value}
        />
      </Box>
    </Box>
  );
}
