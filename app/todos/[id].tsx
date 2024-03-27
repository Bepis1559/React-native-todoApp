import { ReactElement, useEffect } from "react";
import { AppContainer } from "../../wrappers/AppContainer";
import { Expanded_headerRight } from "../../components/expandedTodo/Expanded_headerRight";
import { Expanded_content } from "../../components/expandedTodo/Expanded_content";
import { Expanded_date } from "../../components/expandedTodo/Expanded_date";
import { Expanded_remarks } from "../../components/expandedTodo/Expanded_remarks";
import { MyDateTimePicker } from "../../components/expandedTodo/MyDateTimePicker";
import { useDynamicRoute } from "../../hooks/useDynamicRoute";
export default function Page(): ReactElement {
  const [
    id,
    isCompleted,
    navigation,
    valueDebounced,
    remarksDebounced,
    isInteracting,
    valueState,
    setValueState,
    textColor,
    remarksState,
    setRemarksState,
    dueDate,
  ] = useDynamicRoute();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Expanded_headerRight
          id={id}
          content={valueDebounced}
          remarks={remarksDebounced}
          isInteracting={isInteracting}
        />
      ),
    });
  }, [isInteracting, navigation, valueDebounced, remarksDebounced]);
  return (
    <AppContainer>
      <Expanded_content
        content={valueState}
        setContent={setValueState}
        id={id}
        completed={isCompleted}
        textColor={textColor}
      />
      <Expanded_date textColor={textColor} dueDate={dueDate} />

      <Expanded_remarks
        remarks={remarksState}
        textColor={textColor}
        setRemarksState={setRemarksState}
      />
      <MyDateTimePicker />
    </AppContainer>
  );
}
