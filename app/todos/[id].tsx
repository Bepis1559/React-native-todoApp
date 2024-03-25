import { ReactElement, useEffect, useRef } from "react";
import { AppContainer } from "../../wrappers/AppContainer";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useAtomValue } from "jotai";
import { isTextContentInteractedWithAtom } from "../../context/expandedTodoContext";
import { Expanded_headerRight } from "../../components/expandedTodo/Expanded_headerRight";
import { Expanded_content } from "../../components/expandedTodo/Expanded_content";
import { Expanded_date } from "../../components/expandedTodo/Expanded_date";
import { Expanded_remarks } from "../../components/expandedTodo/Expanded_remarks";
import { TextInput } from "react-native";

export default function Page(): ReactElement {
  const navigation = useNavigation();
  const { id, isCompleted, value, dueDate, remarks } =
    useLocalSearchParams() as unknown as expandedTodoProps;
  const isInteracting = useAtomValue(isTextContentInteractedWithAtom);
  const textColor = useRef("#528deb");
  const contentRef = useRef<TextInput>(null);
  const remarksRef = useRef<TextInput>(null);

  useEffect(() => {
    remarksRef.current?.setNativeProps({ text: "Hello" });
    setTimeout(() => {
      console.log(remarksRef.current?.props);
    }, 1000);
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Expanded_headerRight
          // content={contentRef.current?.props.value}
          // remarks={remarksRef.current?.props.value}
          isInteracting={isInteracting}
        />
      ),
    });
  }, [isInteracting, navigation]);
  return (
    <AppContainer>
      <Expanded_content
        contentRef={contentRef}
        id={id}
        isCompleted={isCompleted}
        value={value}
        textColor={textColor.current}
      />
      <Expanded_date textColor={textColor.current} dueDate={dueDate} />
      <Expanded_remarks
        remarks={remarks}
        textColor={textColor.current}
        ref={remarksRef}
      />
    </AppContainer>
  );
}
