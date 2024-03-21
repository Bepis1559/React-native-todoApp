import {
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
} from "@gluestack-ui/themed";
import { type ReactElement, memo } from "react";

type ActualCheckBoxProps = {
  value: string;
  id: string;
  completed: boolean;
  handleOnChange(): void;
};

function Component({
  value,
  id,
  completed,
  handleOnChange,
}: ActualCheckBoxProps): ReactElement {
  return (
    <Checkbox
      size="md"
      aria-label={value}
      value={completed ? "checked" : "unchecked"}
      role="checkbox"
      isChecked={completed}
      onChange={handleOnChange}
      id={id}>
      <CheckboxIndicator
        height={22}
        width={22}
        sx={{ borderRadius: "$full", marginLeft: 2, marginRight: 5 }}>
        <CheckboxIcon userSelect="none" as={CheckIcon} />
      </CheckboxIndicator>
    </Checkbox>
  );
}

export const ActualCheckBox = memo(Component);
