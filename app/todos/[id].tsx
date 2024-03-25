import { ReactElement, useEffect } from "react";
import { AppContainer } from "../../wrappers/AppContainer";
import { ExpandedTodo } from "../../components/expandedTodo/ExpandedTodo";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useAtomValue } from "jotai";
import { isTextContentInteractedWithAtom } from "../../context/expandedTodoContext";
import { Expanded_headerRight } from "../../components/expandedTodo/Expanded_headerRight";

export default function Page(): ReactElement {
  const navigation = useNavigation();
  const { id, isCompleted, value, dueDate, remarks } =
    useLocalSearchParams() as unknown as expandedTodoProps;
  const isInteracting = useAtomValue(isTextContentInteractedWithAtom);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Expanded_headerRight isInteracting={isInteracting} />,
    });
  }, [isInteracting, navigation]);
  return (
    <AppContainer>
      <ExpandedTodo
        remarks={remarks}
        id={id}
        isCompleted={isCompleted}
        value={value}
        dueDate={dueDate}
      />
    </AppContainer>
  );
}
