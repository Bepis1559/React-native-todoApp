import { Box } from "@gluestack-ui/themed";
import type { ReactNode, ReactElement } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getBackgroundColor } from "../styles/colors";

type FullPageThemedBoxProps = {
  children: ReactNode;
};
export function FullPageThemedBox({
  children,
}: FullPageThemedBoxProps): ReactElement {
  const { top } = useSafeAreaInsets();
  const bgColor = getBackgroundColor();
  return (
    <Box paddingTop={top} flex={1} backgroundColor={bgColor}>
      {children}
    </Box>
  );
}
