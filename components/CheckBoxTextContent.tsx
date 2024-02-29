import { Box, Text } from "@gluestack-ui/themed";
import { AnimatedTextCross } from "./AnimatedTextCross";
import { type ReactElement } from "react";

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
  return (
    <Box>
      <Text
        sx={{
          width: "max-content",
          position: "relative",
        }}>
        <AnimatedTextCross
          isTodoCompleted={isTodoCompleted}
          animationDuration={animationDuration}
        />
        {value}
      </Text>
      <br />
      <Text sx={{ fontSize: "$xs", color: "$coolGray300" }}>
        {dueDate?.toString()}
      </Text>
    </Box>
  );
}
