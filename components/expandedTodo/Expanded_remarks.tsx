import {
  Box,
  Icon,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  ThreeDotsIcon,
} from "@gluestack-ui/themed";
import { memo, type ReactElement } from "react";
import { ExpanedTodoRemarksStyle } from "../../styles/ExpandedTodoStyle";
import { useSetAtom } from "jotai";
import { isTextContentInteractedWithAtom } from "../../context/expandedTodoContext";

type props = {
  textColor: string;
  remarks?: string;
};

function Component({ textColor, remarks }: props): ReactElement {
  const setIsInteracting = useSetAtom(isTextContentInteractedWithAtom);
  return (
    <Box style={ExpanedTodoRemarksStyle}>
      <Input borderWidth={0} flex={1}>
        <InputSlot>
          <InputIcon>
            <Icon as={ThreeDotsIcon} />
          </InputIcon>
        </InputSlot>
        <InputField
          onFocus={() => setIsInteracting(true)}
          selectionColor={textColor}
          placeholder="Remarks"
          defaultValue={remarks}
          multiline
        />
      </Input>
    </Box>
  );
}

export const Expanded_remarks = memo(Component);
