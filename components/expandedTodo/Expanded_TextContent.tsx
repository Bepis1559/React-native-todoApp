import { Box, Text } from "@gluestack-ui/themed";
import { type ReactElement, useRef, useState, memo } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import {
  ExpandedTodoTextBoxStyle,
  getExpandedTodoTextStyle,
  getExpandedTodo_contentInputStyle,
} from "../../styles/ExpandedTodoStyle";
import { useAtom, useSetAtom } from "jotai";
import {
  isEditingAtom,
  isTextContentInteractedWithAtom,
} from "../../context/expandedTodoContext";

function Component(props: Expandend_TextContentProps): ReactElement {
  const { tempCompleted, textColor, initialInputValue } = props;
  const inputRef = useRef<TextInput>(null);
  const [inputState, setInputState] = useState(initialInputValue);
  const [isEditing, setIsEditing] = useAtom(isEditingAtom);
  const setIsInteracting = useSetAtom(isTextContentInteractedWithAtom);
  const handleInteraction = () => setIsInteracting(true);

  function handlOnPress() {
    handleInteraction();
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  }
  return (
    <>
      {isEditing ? (
        <TextInput
          ref={inputRef}
          style={getExpandedTodo_contentInputStyle(tempCompleted)}
          multiline
          selectionColor={textColor}
          value={inputState}
          onFocus={handleInteraction}
          onChangeText={(newText) => setInputState(newText)}
        />
      ) : (
        <TouchableOpacity onPress={handlOnPress}>
          <Box style={ExpandedTodoTextBoxStyle}>
            <Text style={getExpandedTodoTextStyle(tempCompleted)}>
              {inputState}
            </Text>
          </Box>
        </TouchableOpacity>
      )}
    </>
  );
}

export const Expanded_TextContent = memo(Component);
