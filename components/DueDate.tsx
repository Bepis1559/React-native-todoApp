import { Box, Text } from "@gluestack-ui/themed";
import { type ReactElement } from "react";
import { isDateOverdue } from "../helpers/isDateOverdue";

type CheckBoxDueDateProps = {
  dueDate?: string;
};
export function DueDate({ dueDate }: CheckBoxDueDateProps): ReactElement {
  return (
    <Box>
      <Text
        userSelect="none"
        fontSize={"$xs"}
        display={dueDate ? "flex" : "none"}
        color={dueDate && isDateOverdue(dueDate) ? "#cf2b39" : "$coolGray400"}>
        {dueDate}
      </Text>
    </Box>
  );
}
