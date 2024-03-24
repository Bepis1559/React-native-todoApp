import { Box, Text } from "@gluestack-ui/themed";
import { type ReactElement, useRef, useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import {
  ExpandedTodoTextBoxStyle,
  getExpandedTodoTextStyle,
  getExpandedTodo_contentInputStyle,
} from "../../styles/ExpandedTodoStyle";
import { useAtom } from "jotai";
import { isEditingAtom } from "../../context/expandedTodoContext";

export function Expanded_TextContent(
  props: Expandend_TextContentProps,
): ReactElement {
  const { tempCompleted, textColor, initialInputValue } = props;
  const [inputState, setInputState] = useState(initialInputValue);
  const [isEditing, setIsEditing] = useAtom(isEditingAtom);
  const inputRef = useRef<TextInput>(null);

  function handlOnPress() {
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
          onBlur={() => setIsEditing(false)}
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
