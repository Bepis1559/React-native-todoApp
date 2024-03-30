import { Box, Button, ButtonIcon, TrashIcon } from "@gluestack-ui/themed";
import { memo, type ReactElement } from "react";
import { Expanded_DeleteStyle } from "../../styles/ExpandedTodoStyle";
import { useDeleteTodo } from "../../hooks/useDeleteTodo";

type props = {
  id: string;
};

function Component({ id }: props): ReactElement {
  const [deleteTodo] = useDeleteTodo(id);
  return (
    <Box style={Expanded_DeleteStyle}>
      <Button
        onPress={deleteTodo}
        android_ripple={{ color: "#000000" }}
        backgroundColor="transparent">
        <ButtonIcon h={25} w={25} as={TrashIcon} />
      </Button>
    </Box>
  );
}

export const Expanded_Delete = memo(Component);
