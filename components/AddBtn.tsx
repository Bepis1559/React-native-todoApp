import { AddIcon, Box, Icon } from "@gluestack-ui/themed";
import { type ReactElement } from "react";
import { addBtnStyle } from "../styles/AddBtn";
import { Motion } from "@legendapp/motion";

export function AddBtn(): ReactElement {
  return (
    <Motion.Pressable style={{ position: "absolute", bottom: 50, right: 20 }}>
      <Motion.View whileTap={{ scale: 1.15 }}>
        <Box style={addBtnStyle}>
          <Icon
            pointerEvents="none"
            height={25}
            width={25}
            as={AddIcon}
            userSelect="none"
            color="white"
          />
        </Box>
      </Motion.View>
    </Motion.Pressable>
  );
}
