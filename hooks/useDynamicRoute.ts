import { useLocalSearchParams, useNavigation } from "expo-router";
import { useAtomValue } from "jotai";
import { isTextContentInteractedWithAtom } from "../context/expandedTodoContext";
import { type Dispatch, useRef, useState, type SetStateAction } from "react";
import { useDebounce } from "use-debounce";
import { type NavigationProp } from "@react-navigation/native";

type returnType = [
  id: string,
  isCompleted: string,
  navigation: NavigationProp<ReactNavigation.RootParamList>,
  valueDebounced: string,
  remarksDebounced: string,
  isInteracting: boolean,
  valueState: string,
  setValueState: Dispatch<SetStateAction<string>>,
  textColor: string,
  remarksState: string,
  setRemarksState: Dispatch<SetStateAction<string>>,
  dueDate?: string,
];
export function useDynamicRoute(): returnType {
  const { id, isCompleted, value, dueDate, remarks } =
    useLocalSearchParams() as unknown as expandedTodoProps;
  const navigation = useNavigation();
  const isInteracting = useAtomValue(isTextContentInteractedWithAtom);
  const textColor = useRef("#528deb");
  const [valueState, setValueState] = useState(value);
  const [remarksState, setRemarksState] = useState(remarks ?? "");
  const [valueDebounced] = useDebounce(valueState, 500);
  const [remarksDebounced] = useDebounce(remarksState, 500);

  return [
    id,
    isCompleted,
    navigation,
    valueDebounced,
    remarksDebounced,
    isInteracting,
    valueState,
    setValueState,
    textColor.current,
    remarksState,
    setRemarksState,
    dueDate,
  ];
}
