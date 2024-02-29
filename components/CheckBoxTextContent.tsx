import { Box, Text } from "@gluestack-ui/themed";
import { AnimatedTextCross } from "./AnimatedTextCross";
import { type ReactElement } from "react";
import { isPast, parse } from "date-fns";

type CheckBoxTextContentProps = {
  isTodoCompleted: boolean;
  animationDuration: number;
  value: string;
  dueDate?: string;
};

export function CheckBoxTextContent({
  isTodoCompleted,
  animationDuration,
  value,
  dueDate,
}: CheckBoxTextContentProps): ReactElement {
  const parsedDate = dueDate
    ? parse(dueDate, "MMM d, yyyy, h:mm aa", new Date())
    : null;
  const isOverdue = parsedDate ? isPast(parsedDate) : false;
  return (
    <Box marginLeft={5}>
      <Box alignSelf="flex-start">
        <Box position="absolute" top={0} left={0} right={0} bottom={0}>
          <AnimatedTextCross
            isTodoCompleted={isTodoCompleted}
            animationDuration={animationDuration}
          />
        </Box>
        <Text>{value}</Text>
      </Box>
      <Box>
        <Text
          fontSize={"$xs"}
          display={dueDate ? "flex" : "none"}
          color={isOverdue ? "#cf2b39" : "$coolGray400"}>
          {dueDate}
        </Text>
      </Box>
    </Box>
  );
}
