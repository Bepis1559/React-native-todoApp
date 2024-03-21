import { View } from "@gluestack-ui/themed";
import { ReactElement, memo } from "react";

export function Component(): ReactElement {
  return <View height={15} />;
}
export const ItemSeparator = memo(Component);
