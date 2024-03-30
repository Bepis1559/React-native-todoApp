import {
  Box,
  CloseIcon,
  Heading,
  Icon,
  ModalCloseButton,
  ModalHeader,
} from "@gluestack-ui/themed";
import { type ReactElement, memo } from "react";

function Component(): ReactElement {
  return (
    <ModalHeader marginBottom={5} marginTop={5}>
      <Heading textAlign="center" flex={1} size="lg">
        Add Todo
      </Heading>
      <Box right={5} position="absolute" borderRadius={10} overflow="hidden">
        <ModalCloseButton android_ripple={{ color: "#333" }}>
          <Icon as={CloseIcon} />
        </ModalCloseButton>
      </Box>
    </ModalHeader>
  );
}

export const MyModalHeader = memo(Component);
