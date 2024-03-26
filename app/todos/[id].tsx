import { ReactElement, useEffect, useRef, useState } from "react";
import { AppContainer } from "../../wrappers/AppContainer";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useAtomValue } from "jotai";
import { isTextContentInteractedWithAtom } from "../../context/expandedTodoContext";
import { Expanded_headerRight } from "../../components/expandedTodo/Expanded_headerRight";
import { Expanded_content } from "../../components/expandedTodo/Expanded_content";
import { Expanded_date } from "../../components/expandedTodo/Expanded_date";
import { Expanded_remarks } from "../../components/expandedTodo/Expanded_remarks";

export default function Page(): ReactElement {
  const navigation = useNavigation();
  const { id, isCompleted, value, dueDate, remarks } =
    useLocalSearchParams() as unknown as expandedTodoProps;
  const isInteracting = useAtomValue(isTextContentInteractedWithAtom);
  const textColor = useRef("#528deb");
  const [content, setContent] = useState(value);
  const [remarksState, setRemarksState] = useState(remarks ?? "");

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Expanded_headerRight
          content={content}
          remarks={remarksState}
          isInteracting={isInteracting}
        />
      ),
    });
  }, [isInteracting, navigation]);
  return (
    <AppContainer>
      <Expanded_content
        content={content}
        setContent={setContent}
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
