import { Box, Button, ButtonIcon, TrashIcon } from "@gluestack-ui/themed";
import { memo, type ReactElement } from "react";
import { Expanded_DeleteStyle } from "../../styles/ExpandedTodoStyle";
import { useDeleteTodo } from "../../hooks/expandedTodo/useDeleteTodo";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type props = {
  id: string;
};

function Component({ id }: props): ReactElement {
  const [deleteTodo] = useDeleteTodo(id);
  const { bottom } = useSafeAreaInsets();

  return (
    <Box style={[Expanded_DeleteStyle, { marginBottom: bottom }]}>
      <Button
        onPress={deleteTodo}
        android_ripple={{ color: "#333" }}
        backgroundColor="transparent">
        <ButtonIcon h={25} w={25} as={TrashIcon} />
      </Button>
    </Box>
  );
}

export const Expanded_Delete = memo(Component);
