import { useFocusEffect } from "expo-router";
import { useSetAtom } from "jotai";
import { type Dispatch, type SetStateAction, useState } from "react";
import { allTodosAtom } from "../context/allTodosContext";

type returnType = [
  valueState: string,
  setValueState: Dispatch<SetStateAction<string>>,
  remarksState: string,
  setRemarksState: Dispatch<SetStateAction<string>>,
];

export function useUpdateRemarksAndValue(
  id: string,
  initialValue: string,
  initialRemarks?: string,
): returnType {
  const [valueState, setValueState] = useState(initialValue);
  const [remarksState, setRemarksState] = useState(initialRemarks ?? "");
  const setAllTodos = useSetAtom(allTodosAtom);

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

  return [valueState, setValueState, remarksState, setRemarksState];
}
