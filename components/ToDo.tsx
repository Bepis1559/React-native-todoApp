import {
  Box,
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@gluestack-ui/themed";
import { useState, type ReactElement, useRef } from "react";
import { Motion } from "@legendapp/motion";

type props = {
  id: string;
  value: string;
};
export function ToDo({ value, id }: props): ReactElement {
  const [done, setDone] = useState(false);
  const labelCrossingAnimationDuration = useRef(300);
  function handleOnChange() {
    setDone((prev) => !prev);
  }
  return (
    <Motion.View
      animate={{ y: done ? 300 : 0 }}
      transition={{
        type: "timing",
        duration: 1500,
        easing: "linear",
        delay: labelCrossingAnimationDuration.current * 2,
      }}>
      <Box
        sx={{
          marginBottom: 15,
          paddingVertical: 15,
          paddingHorizontal: 30,
          borderRadius: 10,
          backgroundColor: "rgb(23, 23, 23)",
        }}>
        <Checkbox
          size="md"
          aria-label={value}
          value={value}
          accessibilityLabel="Checkbox"
          onChange={handleOnChange}
          id={id}>
          <CheckboxIndicator sx={{ borderRadius: "$full" }} mr="$2">
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>
            <Motion.View
              animate={{ scaleX: done ? 1 : 0 }}
              transition={{
                type: "timing",
                duration: labelCrossingAnimationDuration.current,
                easing: "linear",
              }}
              style={{
                width: "100%",
                height: 1,
                position: "absolute",
                backgroundColor: "white",
                left: 0,
                top: "50%",
                transformOrigin: "left",
              }}></Motion.View>

            {value}
          </CheckboxLabel>
        </Checkbox>
      </Box>
    </Motion.View>
  );
}
