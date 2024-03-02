import { ReactElement } from "react";
import { Box, Text } from "@gluestack-ui/themed";
import { FullPageThemedBox } from "../wrappers/FullPageThemedBox";

export default function Page(): ReactElement {
  return (
    <FullPageThemedBox>
      <Text>Hello from User page</Text>
    </FullPageThemedBox>
  );
}
