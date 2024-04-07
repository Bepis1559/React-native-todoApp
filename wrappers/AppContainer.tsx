import { Box } from "@gluestack-ui/themed";
import { type ReactNode, type ReactElement, memo, useMemo } from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { getBackgroundColor } from "../styles/colors";

type ScrollContainerProps = {
  children: ReactNode;
  isPaddingTopSet?: boolean;
};
function Component({
  children,
  isPaddingTopSet = true,
}: ScrollContainerProps): ReactElement {
  const { top } = useSafeAreaInsets();
  const bgColor = useMemo(() => getBackgroundColor(), []);
  return (
    <SafeAreaProvider>
      <Box
        justifyContent="center"
        flex={1}
        paddingTop={isPaddingTopSet ? top : 0}
        backgroundColor={bgColor}>
        {children}
      </Box>
    </SafeAreaProvider>
  );
}

export const AppContainer = memo(Component);
