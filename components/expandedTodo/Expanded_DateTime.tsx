import { memo, type ReactElement } from "react";
import {
  Box,
  Button,
  ButtonIcon,
  CalendarDaysIcon,
  ClockIcon,
  Text,
} from "@gluestack-ui/themed";
import {
  Date_Time_IconsStyle,
  ExpanedTodoDateStyle,
} from "../../styles/ExpandedTodoStyle";
import { useExpanded_DateTime } from "../../hooks/useExpanded_DateTime";

type props = {
  id: string;
  textColor: string;
  initialDateTime?: Date;
};
function Component(props: props): ReactElement {
  const { textColor, id, initialDateTime } = props;
  const [handleDatePress, handleTimePress, date] = useExpanded_DateTime(
    id,
    initialDateTime,
  );

  return (
    <>
      <Box style={ExpanedTodoDateStyle} accessibilityLabel="Date">
        <Button
          onPress={handleDatePress}
          backgroundColor="transparent"
          paddingHorizontal={5}>
          <ButtonIcon style={Date_Time_IconsStyle} as={CalendarDaysIcon} />
        </Button>
        <Text marginLeft={5} color={textColor}>
          {date ? date.toLocaleDateString() : "Set Date"}
        </Text>
      </Box>

      <Box style={ExpanedTodoDateStyle} accessibilityLabel="Time">
        <Button
          onPress={handleTimePress}
          backgroundColor="transparent"
          paddingHorizontal={5}>
          <ButtonIcon style={Date_Time_IconsStyle} as={ClockIcon} />
        </Button>
        <Text marginLeft={5} color={textColor}>
          {date ? date.toLocaleTimeString() : "Set Time"}
        </Text>
      </Box>
    </>
  );
}

export const Expanded_DateTime = memo(Component);
