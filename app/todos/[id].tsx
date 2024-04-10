import { ReactElement, useEffect, useMemo, useRef, useState } from "react";
import { AppContainer } from "../../wrappers/AppContainer";
import { Expanded_headerRight } from "../../components/expandedTodo/Expanded_headerRight";
import { Expanded_content } from "../../components/expandedTodo/Expanded_content";
import { Expanded_remarks } from "../../components/expandedTodo/Expanded_remarks";
import { useInitalExpandedTodo } from "../../hooks/expandedTodo/useInitalExpandedTodo";
import { Expanded_DateTime } from "../../components/expandedTodo/Expanded_DateTime";
import { Expanded_Delete } from "../../components/expandedTodo/Expanded_Delete";
import {
  Box,
  KeyboardAvoidingView,
  ScrollView,
  Switch,
} from "@gluestack-ui/themed";
import { ExpandedTodoDateTimeSwtichStyle } from "../../styles/ExpandedTodoStyle";
import { useUpdateRemarksAndValue } from "../../hooks/expandedTodo/useUpdateRemarksAndValue";
import { isTextContentInteractedWithAtom } from "../../context/expandedTodoContext";
import { useAtomValue } from "jotai";
import { getBackgroundColor } from "../../styles/colors";
import { useUpdateNotification } from "../../notifications/useUpdateNotification";
import { useUpdateDateTimeValues } from "../../hooks/expandedTodo/useUpdateDateTimeValues";
export default function Page(): ReactElement {
  const textColor = useRef("#528deb");
  const bgColor = useMemo(() => getBackgroundColor(), []);
  const isInteracting = useAtomValue(isTextContentInteractedWithAtom);
  const [id, isCompleted, value, navigation, remarks, initialDateTime] =
    useInitalExpandedTodo();
  const [valueState, setValueState, remarksState, setRemarksState] =
    useUpdateRemarksAndValue(id, value, remarks);
  const [isDateTimeEnabled, setIsDateTimeEnabled] = useState(
    initialDateTime ? true : false,
  );
  const [handleDatePress, handleTimePress, date] = useUpdateDateTimeValues(
    id,
    isDateTimeEnabled,
    initialDateTime,
  );
  useUpdateNotification(id, isDateTimeEnabled, valueState, date);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Expanded_headerRight isInteracting={isInteracting} />,
    });
  }, [isInteracting, navigation]);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={40}
      backgroundColor={bgColor}
      behavior={"padding"}
      flex={1}>
      <ScrollView flex={1}>
        <AppContainer isPaddingTopSet={false}>
          <Expanded_content
            content={valueState}
            setContent={setValueState}
            id={id}
            completed={isCompleted}
            textColor={textColor.current}
          />
          <Expanded_DateTime
            textColor={textColor.current}
            date={date}
            handleDatePress={handleDatePress}
            handleTimePress={handleTimePress}
            isDateTimeEnabled={isDateTimeEnabled}
          />
          <Box style={ExpandedTodoDateTimeSwtichStyle}>
            <Switch
              size="lg"
              onToggle={() => setIsDateTimeEnabled((prev) => !prev)}
              value={isDateTimeEnabled}
            />
          </Box>

          <Expanded_remarks
            remarks={remarksState}
            textColor={textColor.current}
            setRemarksState={setRemarksState}
          />
        </AppContainer>
      </ScrollView>
      <Expanded_Delete id={id} />
    </KeyboardAvoidingView>
  );
}
