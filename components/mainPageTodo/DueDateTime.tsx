import { Box, Text } from "@gluestack-ui/themed";
import { type ReactElement, memo } from "react";
import { isPast } from "date-fns";
import { converDateAndTimeToDateObject } from "../../helpers/converDateAndTimeToDateObject";
import { useAtomValue } from "jotai";
import { isTodoDateTimeLoadingAtom } from "../../context/isTodoDateTimeLoading";

type props = {
  dueDate?: string;
  dueTime?: string;
};

function Component({ dueDate, dueTime }: props): ReactElement {
  const dateObject = converDateAndTimeToDateObject(dueDate, dueTime);
  const isTodoDateTimeLoading = useAtomValue(isTodoDateTimeLoadingAtom);
  return (
    <Box>
      <Text
        userSelect="none"
        fontSize={"$xs"}
        display={dueDate ? "flex" : "none"}
        color={
          dateObject && isPast(dateObject) && !isTodoDateTimeLoading
            ? "#cf2b39"
            : "$coolGray400"
        }>
        {isTodoDateTimeLoading ? "Loading..." : dueDate + " " + dueTime}
      </Text>
    </Box>
  );
}
export const DueDateTime = memo(Component);
