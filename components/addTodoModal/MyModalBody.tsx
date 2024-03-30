import {
  Box,
  Button,
  ButtonIcon,
  CalendarDaysIcon,
  ClockIcon,
  Input,
  InputField,
  ModalBody,
  Switch,
} from "@gluestack-ui/themed";
import {
  memo,
  useRef,
  type ReactElement,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

type props = {
  todoValue: string;
  setTodoValue: Dispatch<SetStateAction<string>>;
  showMode: (currentMode: dateTimePickerMode) => void;
};

function Component({ showMode, todoValue, setTodoValue }: props): ReactElement {
  const [isDateTimeDisabled, setIsDateTimeDisabled] = useState(false);
  const color = useRef("#528deb");
  return (
    <ModalBody>
      <Input
        marginTop={10}
        borderRadius={10}
        borderColor="#333"
        borderWidth={1}
        variant="outline">
        <InputField
          value={todoValue}
          onChangeText={(text) => setTodoValue(text)}
          selectionColor={color.current}
          placeholder="Enter todo here"
        />
      </Input>
      <Box
        alignItems="center"
        marginTop={14}
        flexDirection="row"
        justifyContent="flex-start">
        <Button
          isDisabled={!isDateTimeDisabled}
          onPress={() => showMode("date")}
          marginLeft={-17}
          backgroundColor="transparent">
          <Icon iconType={"calendar"} />
        </Button>
        <Button
          isDisabled={!isDateTimeDisabled}
          onPress={() => showMode("time")}
          marginLeft={-25}
          backgroundColor="transparent">
          <Icon iconType="clock" />
        </Button>
        <Switch
          value={isDateTimeDisabled}
          onToggle={() => setIsDateTimeDisabled((prev) => !prev)}
          marginLeft={"auto"}
          marginRight={8}
        />
      </Box>
    </ModalBody>
  );
}

export const MyModalBody = memo(Component);

type iconProps = {
  iconType: "calendar" | "clock";
};

function Icon({ iconType }: iconProps) {
  return (
    <ButtonIcon
      color="#528deb"
      width={24}
      aspectRatio={1 / 1}
      as={iconType == "calendar" ? CalendarDaysIcon : ClockIcon}
    />
  );
}
