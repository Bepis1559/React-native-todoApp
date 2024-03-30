import { type ReactElement, memo } from "react";
import { Text } from "@gluestack-ui/themed";

function Component({ value }: todoTextProps): ReactElement {
  return (
    <Text mr={10} numberOfLines={1} ellipsizeMode="tail">
      {value}
    </Text>
  );
}
export const TodoText = memo(Component);
