import { Box, Text } from "@gluestack-ui/themed";
import { type ReactElement, useRef, useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { getExpandedTodo_contentInputStyle } from "../../styles/ExpandedTodoStyle";
import { AnimatedTextCross } from "../AnimatedTextCross";

export function Expanded_TextContent(
  props: Expandend_TextContentProps,
): ReactElement {
  const { tempCompleted, animationDuration, textColor, initialInputValue } =
    props;
  const [inputState, setInputState] = useState(initialInputValue);
  const [isEditing, setIsEditing] = useState(false);
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
          <Box marginLeft={3} paddingVertical={9}>
            <AnimatedTextCross
              isTodoCompleted={tempCompleted}
              animationDuration={animationDuration}
            />
            <Text>{inputState}</Text>
          </Box>
        </TouchableOpacity>
      )}
    </>
  );
}
