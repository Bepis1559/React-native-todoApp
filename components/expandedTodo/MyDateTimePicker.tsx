import { type ReactElement, memo } from "react";
import { Button, ButtonText, SafeAreaView, Text } from "@gluestack-ui/themed";
import { useDateTimePicker } from "../../hooks/useDateTimePicker";

function Component(): ReactElement {
  const [showMode, date] = useDateTimePicker();

  return (
    <SafeAreaView>
      <Button onPress={() => showMode("date")}>
        <ButtonText>Show date picker!</ButtonText>
      </Button>
      <Button onPress={() => showMode("time")}>
        <ButtonText>Show time picker!</ButtonText>
      </Button>
      <Text>{date.toLocaleString()}</Text>
    </SafeAreaView>
  );
}

export const MyDateTimePicker = memo(Component);
