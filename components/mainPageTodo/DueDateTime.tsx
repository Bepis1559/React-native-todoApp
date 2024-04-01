import { Box, Text } from "@gluestack-ui/themed";
import { type ReactElement, memo } from "react";
import { isPast } from "date-fns";
import { converDateAndTimeToDateObject } from "../../helpers/converDateAndTimeToDateObject";

type props = {
  dueDate?: string;
  dueTime?: string;
};

function Component({ dueDate, dueTime }: props): ReactElement {
  const dateObject = converDateAndTimeToDateObject(dueDate, dueTime);

  return (
    <Box>
      <Text
        userSelect="none"
        fontSize={"$xs"}
        display={dueDate ? "flex" : "none"}
        color={dateObject && isPast(dateObject) ? "#cf2b39" : "$coolGray400"}>
        {dueDate} &nbsp;{dueTime}
      </Text>
    </Box>
  );
}
export const DueDateTime = memo(Component);
