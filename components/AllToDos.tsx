import { CheckboxGroup } from "@gluestack-ui/themed";
import { useState, type ReactElement } from "react";
import { ToDo } from "./ToDo";
import { formatDate } from "../helpers/formatDate";

export function AllToDos(): ReactElement {
  const [values, setValues] = useState([""]);
  const date1 = formatDate(new Date(2022, 1, 25, 13, 7));
  const date2 = formatDate(new Date(2024, 4, 17, 17, 24));

  return (
    <CheckboxGroup
      accessibilityLabel="Checkbox Group"
      value={values}
      onChange={setValues}
      nativeID="checkbox-group">
      <ToDo dueDate={date1} id="1" value="Do the dishes" />
      <ToDo dueDate={date2} id="2" value="Do the laundry" />
      <ToDo id="3" value="Do the homework" />
    </CheckboxGroup>
  );
}
