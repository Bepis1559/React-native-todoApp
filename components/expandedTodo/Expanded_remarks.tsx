import { Box, Icon, InputIcon, ThreeDotsIcon } from "@gluestack-ui/themed";
import {
  type ReactElement,
  forwardRef,
  type ForwardedRef,
  memo,
  useEffect,
  useState,
} from "react";
import {
  ExpandedTodoStyle,
  getExpandedTodo_contentInputStyle,
} from "../../styles/ExpandedTodoStyle";
import { useSetAtom } from "jotai";
import { isTextContentInteractedWithAtom } from "../../context/expandedTodoContext";
import { TextInput } from "react-native";

type props = {
  textColor: string;
  // remarksRef: RefObject<TextInput>;
  remarks?: string;
};

function Component(
  { textColor, remarks }: props,
  ref: ForwardedRef<TextInput>,
): ReactElement {
  const setIsInteracting = useSetAtom(isTextContentInteractedWithAtom);
  const [state, setState] = useState(remarks);
  return (
    <Box style={ExpandedTodoStyle}>
      <InputIcon>
        <Icon as={ThreeDotsIcon} />
      </InputIcon>

      <TextInput
        ref={ref}
        style={getExpandedTodo_contentInputStyle(false)}
        onFocus={() => setIsInteracting(true)}
        selectionColor={textColor}
        placeholder="Remarks"
        placeholderTextColor="gray"
        // defaultValue={remarks}
        onChangeText={(text) => setState(text)}
        value={state}
        multiline
      />
    </Box>
  );
}

export const Expanded_remarks = memo(forwardRef(Component));
