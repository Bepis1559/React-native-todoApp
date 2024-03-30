import { Box, Button, ButtonIcon, TrashIcon } from "@gluestack-ui/themed";
import { memo, type ReactElement } from "react";
import { Expanded_DeleteStyle } from "../../styles/ExpandedTodoStyle";

function Component(): ReactElement {
  return (
    <Box style={Expanded_DeleteStyle}>
      <Button
        android_ripple={{ color: "#000000" }}
        backgroundColor="transparent">
        <ButtonIcon h={25} w={25} as={TrashIcon} />
      </Button>
    </Box>
  );
}

export const Expanded_Delete = memo(Component);
