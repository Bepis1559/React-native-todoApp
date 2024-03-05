import { ScrollView, Box } from "@gluestack-ui/themed";
import type { ReactNode, ReactElement } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getBackgroundColor } from "../styles/colors";

type ScrollContainerProps = {
  children: ReactNode;
};
export function AppContainer({ children }: ScrollContainerProps): ReactElement {
  const { top } = useSafeAreaInsets();
  const bgColor = getBackgroundColor();
  return (
    <Box flex={1} paddingTop={top} backgroundColor={bgColor}>
      {children}
    </Box>
  );
}
