import { useRef, type ReactElement } from "react";
import {
  BellIcon,
  Box,
  Icon,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Text,
  ThreeDotsIcon,
} from "@gluestack-ui/themed";
import { ActualCheckBox } from "./ActualCheckBox";
import { useHandleCheckBoxOnChange } from "../hooks/useHandleCheckBoxOnChange";
import { CheckBoxTextContent } from "./CheckBoxTextContent";
import {
  ExpandedTodoStyle,
  ExpanedTodoRemarksStyle,
} from "../styles/ExpandedTodoStyle";
import { TextInput } from "react-native";
import { Expanded_remarks } from "./expandedTodo/Expanded_remarks";
import { Expanded_date } from "./expandedTodo/Expanded_date";
import { Expanded_content } from "./expandedTodo/Expanded_content";

export function ExpandedTodo({
  id,
  value,
  isCompleted,
  dueDate,
}: expandedTodoProps): ReactElement {
  const textColor = useRef("#528deb");
  return (
    <>
      <Expanded_content id={id} isCompleted={isCompleted} value={value} />
      <Expanded_date textColor={textColor.current} dueDate={dueDate} />
      <Expanded_remarks textColor={textColor.current} />
    </>
  );
}
