import {
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
} from "@gluestack-ui/themed";
import { type ReactElement } from "react";

type ActualCheckBoxProps = {
  value: string;
  id: string;
  handleOnChange: (isSelected: boolean) => void | undefined;
};

export function ActualCheckBox({
  value,
  handleOnChange,
  id,
}: ActualCheckBoxProps): ReactElement {
  return (
    <Checkbox
      size="md"
      aria-label={value}
      value={value}
      role="checkbox"
      onChange={handleOnChange}
      id={id}>
      <CheckboxIndicator sx={{ borderRadius: "$full" }} mr="$2">
        <CheckboxIcon userSelect="none" as={CheckIcon} />
      </CheckboxIndicator>
    </Checkbox>
  );
}
