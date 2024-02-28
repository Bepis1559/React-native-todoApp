import { CheckboxGroup } from "@gluestack-ui/themed";
import { useState, type ReactElement } from "react";
import { ToDo } from "./ToDo";

export function AllToDos(): ReactElement {
  const [values, setValues] = useState([""]);

  return (
    <CheckboxGroup
      accessibilityLabel="Checkbox Group"
      value={values}
      onChange={setValues}
      nativeID="checkbox-group">
      <ToDo dueDate="Feb 27, 5:24PM" id="1" value="Do the dishes" />
      <ToDo dueDate="Mar 17, 5:24PM" id="2" value="Do the laundry" />
      <ToDo id="3" value="Do the homework" />
    </CheckboxGroup>
  );
}
