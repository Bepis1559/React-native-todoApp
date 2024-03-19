import { type ReactElement } from "react";
import { ExpandedTodoStyle } from "../../styles/ExpandedTodoStyle";
import { BellIcon, Box, Icon, Text } from "@gluestack-ui/themed";

type props = {
  textColor: string;
  dueDate: string | undefined;
};
export function Expanded_date({ textColor, dueDate }: props): ReactElement {
  const dueDateAsArray = dueDate?.split(",");

  return (
    <Box style={ExpandedTodoStyle} accessibilityLabel="Date">
      <Icon height={25} width={25} marginRight={5} as={BellIcon} />
      <Text color={textColor}>
        {dueDateAsArray ? dueDateAsArray[2] : "Add reminder"}
      </Text>
    </Box>
  );
}
