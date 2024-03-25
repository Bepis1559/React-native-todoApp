import { type ReactElement, useState, memo } from "react";
import { TextInput } from "react-native";
import { getExpandedTodo_contentInputStyle } from "../../styles/ExpandedTodoStyle";
import { useSetAtom } from "jotai";
import { isTextContentInteractedWithAtom } from "../../context/expandedTodoContext";

function Component(props: Expandend_TextContentProps): ReactElement {
  const { tempCompleted, textColor, initialInputValue } = props;
  const [inputState, setInputState] = useState(initialInputValue);
  const setIsInteracting = useSetAtom(isTextContentInteractedWithAtom);
  return (
    <TextInput
      style={getExpandedTodo_contentInputStyle(tempCompleted)}
      multiline
      selectionColor={textColor}
      onFocus={() => setIsInteracting(true)}
      value={inputState}
      onChangeText={(newText) => setInputState(newText)}
    />
  );
}

export const Expanded_TextContent = memo(Component);
