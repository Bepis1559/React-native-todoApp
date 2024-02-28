import {
  Box,
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@gluestack-ui/themed";
import { useState, type ReactElement } from "react";
import { Motion } from "@legendapp/motion";

type props = {
  value: string;
};
export function ToDo({ value }: props): ReactElement {
  const [done, setDone] = useState(false);
  function handleOnChange() {
    setDone((prev) => !prev);
  }
  return (
    <Motion.View
      animate={{ y: done ? 300 : 0 }}
      transition={{ type: "timing", duration: 1000, easing: "linear" }}>
      <Box
        sx={{
          marginBottom: 15,
          paddingVertical: 15,
          paddingHorizontal: 30,
          borderRadius: 7,
          backgroundColor: "rgb(23, 23, 23)",
        }}>
        <Checkbox
          size="md"
          aria-label={value}
          value={value}
          accessibilityLabel="Checkbox"
          onChange={handleOnChange}
          nativeID="checkbox-2">
          <CheckboxIndicator sx={{ borderRadius: "$full" }} mr="$2">
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel
            sx={{
              textDecorationStyle: "solid",
              textDecorationLine: done ? "line-through" : "none",
              textDecorationColor: "$white",
            }}>
            {value}
          </CheckboxLabel>
        </Checkbox>
      </Box>
    </Motion.View>
  );
}
