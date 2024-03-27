import { memo, type ReactElement } from "react";
import {
  Date_Time_IconsStyle,
  ExpanedTodoDateStyle,
} from "../../styles/ExpandedTodoStyle";
import {
  CalendarDaysIcon,
  Box,
  ClockIcon,
  Icon,
  Text,
} from "@gluestack-ui/themed";

function Component(props: Expanded_dateProps): ReactElement {
  const { textColor, dueDate } = props;
  const dueDateAsArray = dueDate?.split(",");
  return (
    <Box style={ExpanedTodoDateStyle} accessibilityLabel="Date">
      <Icon style={Date_Time_IconsStyle} as={ClockIcon} />
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

export const Expanded_date = memo(Component);
