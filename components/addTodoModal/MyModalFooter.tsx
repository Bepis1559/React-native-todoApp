import { Box, Button, ButtonText, ModalFooter } from "@gluestack-ui/themed";
import { type ReactElement, memo } from "react";

type footerProps = {
  closeModal: () => void;
};
function Component({ closeModal }: footerProps): ReactElement {
  return (
    <ModalFooter marginTop={-10} justifyContent="space-between">
      <FooterButton closeModal={closeModal} actionType="negative" />
      <FooterButton closeModal={closeModal} actionType="primary" />
    </ModalFooter>
  );
}

export const MyModalFooter = memo(Component);

type footerButtonProps = {
  actionType: "negative" | "primary";
} & footerProps;

function FooterButton({
  actionType,
  closeModal,
}: footerButtonProps): ReactElement {
  return (
    <Box borderRadius={4} overflow="hidden">
      <Button
        android_ripple={{
          color: actionType == "negative" ? "#ed184a" : "#376be6",
        }}
        variant="outline"
        size="sm"
        action={actionType}
        onPress={closeModal}>
        <ButtonText>{actionType == "negative" ? "Close" : "Add"}</ButtonText>
      </Button>
    </Box>
  );
}
