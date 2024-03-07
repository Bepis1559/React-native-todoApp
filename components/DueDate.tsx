import { Box, Text } from "@gluestack-ui/themed";
import { type ReactElement } from "react";
import { converStringDateToDateObject } from "../helpers/converStringDateToDateObject";
import { isPast } from "date-fns";

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
        color={
          dueDate && isPast(converStringDateToDateObject(dueDate))
            ? "#cf2b39"
            : "$coolGray400"
        }>
        {dueDate}
      </Text>
    </Box>
  );
}
