import { type ReactElement, useRef, useState, memo } from "react";
import { TextInput } from "react-native";
import { getExpandedTodo_contentInputStyle } from "../../styles/ExpandedTodoStyle";
import { useSetAtom } from "jotai";
import { isTextContentInteractedWithAtom } from "../../context/expandedTodoContext";

function Component(props: Expandend_TextContentProps): ReactElement {
  const { tempCompleted, textColor, initialInputValue } = props;
  const inputRef = useRef<TextInput>(null);
  const [inputState, setInputState] = useState(initialInputValue);
  const setIsInteracting = useSetAtom(isTextContentInteractedWithAtom);
  const handleInteraction = () => setIsInteracting(true);

  return (
    <TextInput
      ref={inputRef}
      style={getExpandedTodo_contentInputStyle(tempCompleted)}
      multiline
      selectionColor={textColor}
      value={inputState}
      onFocus={handleInteraction}
      onChangeText={(newText) => setInputState(newText)}
    />
  );
}

export const Expanded_TextContent = memo(Component);
