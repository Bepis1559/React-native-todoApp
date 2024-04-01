import { ReactElement, useEffect, useState } from "react";
import { AppContainer } from "../../wrappers/AppContainer";
import { Expanded_headerRight } from "../../components/expandedTodo/Expanded_headerRight";
import { Expanded_content } from "../../components/expandedTodo/Expanded_content";
import { Expanded_remarks } from "../../components/expandedTodo/Expanded_remarks";
import { useDynamicRoute } from "../../hooks/useDynamicRoute";
import { Expanded_DateTime } from "../../components/expandedTodo/Expanded_DateTime";
import { Expanded_Delete } from "../../components/expandedTodo/Expanded_Delete";
import { Box, Switch } from "@gluestack-ui/themed";
import {
  ExpandedTodoDateTimeSwtichStyle,
  ExpanedTodoDateStyle,
} from "../../styles/ExpandedTodoStyle";
export default function Page(): ReactElement {
  const [
    id,
    isCompleted,
    navigation,
    isInteracting,
    valueState,
    setValueState,
    textColor,
    remarksState,
    setRemarksState,
    initialDateTime,
  ] = useDynamicRoute();
  const [isDateTimeEnabled, setIsDateTimeEnabled] = useState(
    initialDateTime ? true : false,
  );

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Expanded_headerRight isInteracting={isInteracting} />,
    });
  }, [isInteracting, navigation]);

  return (
    <AppContainer>
      <Expanded_content
        content={valueState}
        setContent={setValueState}
        id={id}
        completed={isCompleted}
        textColor={textColor}
      />
      <Expanded_DateTime
        isDateTimeEnabled={isDateTimeEnabled}
        id={id}
        textColor={textColor}
        initialDateTime={initialDateTime}
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
        textColor={textColor}
        setRemarksState={setRemarksState}
      />

      <Expanded_Delete id={id} />
    </AppContainer>
  );
}
