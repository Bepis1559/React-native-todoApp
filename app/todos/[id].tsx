import { ReactElement, useEffect, useRef, useState } from "react";
import { AppContainer } from "../../wrappers/AppContainer";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useAtomValue } from "jotai";
import { isTextContentInteractedWithAtom } from "../../context/expandedTodoContext";
import { Expanded_headerRight } from "../../components/expandedTodo/Expanded_headerRight";
import { Expanded_content } from "../../components/expandedTodo/Expanded_content";
import { Expanded_date } from "../../components/expandedTodo/Expanded_date";
import { Expanded_remarks } from "../../components/expandedTodo/Expanded_remarks";
import { useDebounce } from "use-debounce";

export default function Page(): ReactElement {
  const navigation = useNavigation();
  const { id, isCompleted, value, dueDate, remarks } =
    useLocalSearchParams() as unknown as expandedTodoProps;
  const isInteracting = useAtomValue(isTextContentInteractedWithAtom);
  const textColor = useRef("#528deb");
  const [valueState, setValueState] = useState(value);
  const [remarksState, setRemarksState] = useState(remarks ?? "");
  const [valueDebounced] = useDebounce(valueState, 500);
  const [remarksDebounced] = useDebounce(remarksState, 500);

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
        textColor={textColor.current}
      />
      <Expanded_date textColor={textColor.current} dueDate={dueDate} />
      <Expanded_remarks
        remarks={remarksState}
        textColor={textColor.current}
        setRemarksState={setRemarksState}
      />
    </AppContainer>
  );
}
