import { useLocalSearchParams, useNavigation } from "expo-router";
import { useMemo } from "react";
import { converDateAndTimeToDateObject } from "../helpers/converDateAndTimeToDateObject";
import { isValid } from "date-fns";

export function useInitalExpandedTodo(): useDynamicRouteReturnType {
  const { id, isCompleted, value, remarks, dueDate, dueTime } =
    useLocalSearchParams() as unknown as expandedTodoProps;
  const navigation = useNavigation();

  const initialDateTime = useMemo(() => {
    const dateTimeObj = converDateAndTimeToDateObject(dueDate, dueTime);
    return isValid(dateTimeObj) ? dateTimeObj : undefined;
  }, [dueDate, dueTime]);

  return [id, isCompleted, value, navigation, remarks, initialDateTime];
}
