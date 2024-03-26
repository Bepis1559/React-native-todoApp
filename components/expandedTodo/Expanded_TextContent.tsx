import { type ReactElement, useState, memo } from "react";
import { TextInput } from "react-native";
import { getExpandedTodo_contentInputStyle } from "../../styles/ExpandedTodoStyle";
import { useSetAtom } from "jotai";
import { isTextContentInteractedWithAtom } from "../../context/expandedTodoContext";

function Component(props: Expanded_TextContentProps): ReactElement {
  const { completed, textColor, content, setContent } = props;
  const setIsInteracting = useSetAtom(isTextContentInteractedWithAtom);
  return (
    <TextInput
      style={getExpandedTodo_contentInputStyle(completed)}
      multiline
      selectionColor={textColor}
      onFocus={() => setIsInteracting(true)}
      value={content}
      onChangeText={(newText) => setContent(newText)}
    />
  );
}

export const Expanded_TextContent = memo(Component);
