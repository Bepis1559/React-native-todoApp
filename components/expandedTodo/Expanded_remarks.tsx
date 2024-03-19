import {
  Box,
  Icon,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  ThreeDotsIcon,
} from "@gluestack-ui/themed";
import { type ReactElement } from "react";
import { ExpanedTodoRemarksStyle } from "../../styles/ExpandedTodoStyle";

type props = {
  textColor: string;
};

export function Expanded_remarks({ textColor }: props): ReactElement {
  return (
    <Box style={ExpanedTodoRemarksStyle}>
      <Input borderWidth={0} flex={1}>
        <InputSlot>
          <InputIcon>
            <Icon as={ThreeDotsIcon} />
          </InputIcon>
        </InputSlot>
        <InputField
          selectionColor={textColor}
          placeholder="Remarks"
          multiline
        />
      </Input>
    </Box>
  );
}
