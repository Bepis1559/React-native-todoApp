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
import { useUpdateDateTimeValues } from "../../hooks/useUpdateDateTimeValues";

type props = {
  id: string;
  textColor: string;
  initialDateTime?: Date;
  isDateTimeEnabled: boolean;
};
function Component(props: props): ReactElement {
  const { textColor, id, initialDateTime, isDateTimeEnabled } = props;
  const [handleDatePress, handleTimePress, date] = useUpdateDateTimeValues(
    id,
    isDateTimeEnabled,
    initialDateTime,
  );

  return (
    <>
      <Container
        pickerType="date"
        onPress={handleDatePress}
        date={date}
        textColor={textColor}
        switchState={isDateTimeEnabled}
      />

      <Container
        pickerType="time"
        onPress={handleTimePress}
        date={date}
        textColor={textColor}
        switchState={isDateTimeEnabled}
      />
    </>
  );
}

export const Expanded_DateTime = memo(Component);

type containerProps = {
  pickerType: dateTimePickerMode;
  onPress: () => void;
  date: Date;
  textColor: string;
  switchState: boolean;
};

function Container(props: containerProps): ReactElement {
  const { pickerType, onPress, date, textColor, switchState } = props;

  return (
    <Box style={ExpanedTodoDateStyle.box}>
      <Button
        isDisabled={!switchState}
        style={ExpanedTodoDateStyle.button}
        onPress={onPress}>
        <ButtonIcon
          style={Date_Time_IconsStyle}
          as={pickerType == "time" ? ClockIcon : CalendarDaysIcon}
        />
      </Button>
      <Text marginLeft={5} color={textColor}>
        {pickerType == "time"
          ? date.toLocaleTimeString()
          : date.toLocaleDateString()}
      </Text>
    </Box>
  );
}
