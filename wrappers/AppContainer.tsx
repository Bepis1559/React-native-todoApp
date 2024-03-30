import { Box } from "@gluestack-ui/themed";
import { type ReactNode, type ReactElement, memo, useMemo } from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { getBackgroundColor } from "../styles/colors";

type ScrollContainerProps = {
  children: ReactNode;
};
function Component({ children }: ScrollContainerProps): ReactElement {
  const { top, bottom } = useSafeAreaInsets();
  const bgColor = useMemo(() => getBackgroundColor(), []);
  return (
    <SafeAreaProvider>
      <Box
        flex={1}
        paddingTop={top}
        paddingBottom={bottom}
        backgroundColor={bgColor}>
        {children}
      </Box>
    </SafeAreaProvider>
  );
}

export const AppContainer = memo(Component);
