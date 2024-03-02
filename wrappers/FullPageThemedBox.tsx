import { Box } from "@gluestack-ui/themed";
import type { ReactNode, ReactElement } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type props = {
  children: ReactNode;
};
export function FullPageThemedBox({ children }: props): ReactElement {
  const { top } = useSafeAreaInsets();

  return (
    <Box
      paddingTop={top}
      id="app-container"
      w={"100%"}
      h="100%"
      sx={{
        _dark: {
          bg: "$light900",
        },
      }}>
      {children}
    </Box>
  );
}
