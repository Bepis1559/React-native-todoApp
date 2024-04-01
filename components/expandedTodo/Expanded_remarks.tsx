import { Box } from "@gluestack-ui/themed";
import { type ReactElement, memo, Dispatch, SetStateAction } from "react";
import {
  ExpandedTodoStyle,
  getExpandedTodo_contentInputStyle,
} from "../../styles/ExpandedTodoStyle";
import { useSetAtom } from "jotai";
import { isTextContentInteractedWithAtom } from "../../context/expandedTodoContext";
import { TextInput } from "react-native";

type props = {
  textColor: string;
  remarks: string;
  setRemarksState: Dispatch<SetStateAction<string>>;
};

function Component({
  textColor,
  remarks,
  setRemarksState,
}: props): ReactElement {
  const setIsInteracting = useSetAtom(isTextContentInteractedWithAtom);
  return (
    <Box style={ExpandedTodoStyle}>
      <TextInput
        style={getExpandedTodo_contentInputStyle(false)}
        onFocus={() => setIsInteracting(true)}
        selectionColor={textColor}
        placeholder="Remarks"
        placeholderTextColor="gray"
        onChangeText={(text) => setRemarksState(text)}
        value={remarks}
        multiline
      />
    </Box>
  );
}

export const Expanded_remarks = memo(Component);
