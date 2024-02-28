import {
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@gluestack-ui/themed";
import { type ReactElement } from "react";

type props = {
  value: string;
};
export function MyCheckBox({ value }: props): ReactElement {
  return (
    <Checkbox
      m="$2"
      size="md"
      aria-label={value}
      value={value}
      accessibilityLabel="Checkbox"
      onChange={(isSelected: boolean) => console.log(isSelected, "###")}
      nativeID="checkbox-2">
      <CheckboxIndicator mr="$2">
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel>{value}</CheckboxLabel>
    </Checkbox>
  );
}
