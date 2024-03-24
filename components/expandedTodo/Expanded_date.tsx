import { type ReactElement } from "react";
import { ExpanedTodoDateStyle } from "../../styles/ExpandedTodoStyle";
import { BellIcon, Box, Icon, Text } from "@gluestack-ui/themed";

export function Expanded_date(props: Expanded_dateProps): ReactElement {
  const { textColor, dueDate } = props;
  const dueDateAsArray = dueDate?.split(",");
  return (
    <Box style={ExpanedTodoDateStyle} accessibilityLabel="Date">
      <Icon height={25} width={25} marginRight={5} as={BellIcon} />
      <Text color={textColor}>
        {dueDateAsArray
          ? dueDateAsArray?.length == 2
            ? dueDateAsArray[1]
            : dueDateAsArray[2]
          : "Add reminder"}
      </Text>
    </Box>
  );
}
