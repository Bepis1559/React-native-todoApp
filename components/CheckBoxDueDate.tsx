import { Box, Text } from "@gluestack-ui/themed";
import { isPast, parse } from "date-fns";
import { useMemo, type ReactElement } from "react";
import { todoDateFormat } from "../helpers/todoDateFormat";

type CheckBoxDueDateProps = {
  dueDate?: string;
};
export function CheckBoxDueDate({
  dueDate,
}: CheckBoxDueDateProps): ReactElement {
  const parseStringDueDateToDateObject = () =>
    dueDate ? todoDateFormat(dueDate) : null;
  const parsedDate = useMemo(parseStringDueDateToDateObject, []);
  const handleIsOverdue = () => (parsedDate ? isPast(parsedDate) : false);
  const isOverdue = useMemo(handleIsOverdue, []);
  return (
    <Box>
      <Text
        userSelect="none"
        fontSize={"$xs"}
        display={dueDate ? "flex" : "none"}
        color={isOverdue ? "#cf2b39" : "$coolGray400"}>
        {dueDate}
      </Text>
    </Box>
  );
}
