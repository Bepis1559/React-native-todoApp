import { Box, Text } from "@gluestack-ui/themed";
import { isPast, parse } from "date-fns";
import { useMemo, type ReactElement } from "react";

type CheckBoxDueDateProps = {
  dueDate?: string;
};
export function CheckBoxDueDate({
  dueDate,
}: CheckBoxDueDateProps): ReactElement {
  const handleDueDate = () =>
    dueDate ? parse(dueDate, "MMM d, yyyy, h:mm aa", new Date()) : null;
  const handleIsOverdue = () => (parsedDate ? isPast(parsedDate) : false);
  const parsedDate = useMemo(handleDueDate, []);
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
