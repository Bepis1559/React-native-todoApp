import { View } from "@gluestack-ui/themed";
import { ReactElement, memo } from "react";

function Component(): ReactElement {
  return <View height={15} />;
}
export const ItemSeparator = memo(Component);
