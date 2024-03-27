import {
  useFocusEffect,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";
import { useAtomValue, useSetAtom } from "jotai";
import { isTextContentInteractedWithAtom } from "../context/expandedTodoContext";
import { useMemo, useRef, useState } from "react";
import { converDateAndTimeToDateObject } from "../helpers/converDateAndTimeToDateObject";
import { isValid } from "date-fns";
import { allTodosAtom } from "../context/allTodosContext";

export function useDynamicRoute(): useDynamicRouteReturnType {
  const { id, isCompleted, value, remarks, dueDate, dueTime } =
    useLocalSearchParams() as unknown as expandedTodoProps;
  const setAllTodos = useSetAtom(allTodosAtom);

  const navigation = useNavigation();
  const isInteracting = useAtomValue(isTextContentInteractedWithAtom);
  const textColor = useRef("#528deb");
  const [valueState, setValueState] = useState(value);
  const [remarksState, setRemarksState] = useState(remarks ?? "");
  const initialDateTime = useMemo(() => {
    const dateTimeObj = converDateAndTimeToDateObject(dueDate, dueTime);
    return isValid(dateTimeObj) ? dateTimeObj : new Date();
  }, [dueDate, dueTime]);

  useFocusEffect(() => {
    return () => {
      setAllTodos((prev) =>
        prev.map((todo) =>
          todo.id == id
            ? { ...todo, value: valueState, remarks: remarksState }
            : todo,
        ),
      );
    };
  });
  return [
    id,
    isCompleted,
    navigation,
    isInteracting,
    valueState,
    setValueState,
    textColor.current,
    remarksState,
    setRemarksState,
    initialDateTime,
  ];
}
