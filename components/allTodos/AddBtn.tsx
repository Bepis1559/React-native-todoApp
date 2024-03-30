import { AddIcon, Box, Icon } from "@gluestack-ui/themed";
import { type ReactElement } from "react";
import { addBtnStyle } from "../../styles/AddBtn";
import { Motion } from "@legendapp/motion";
import { useSetAtom } from "jotai";
import { isNewTodoModalOpenedAtom } from "../../context/newTodoModalContext";

export function AddBtn(): ReactElement {
  const setShowModal = useSetAtom(isNewTodoModalOpenedAtom);
  return (
    <Motion.Pressable
      onPress={() => setShowModal(true)}
      style={{ position: "absolute", bottom: 50, right: 20 }}>
      <Motion.View whileTap={{ scale: 1.15 }}>
        <Box style={addBtnStyle.Box}>
          <Icon
            pointerEvents="none"
            height={25}
            width={25}
            userSelect="none"
            color="white"
            as={AddIcon}
          />
        </Box>
      </Motion.View>
    </Motion.Pressable>
  );
}
