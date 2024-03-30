import { Modal, ModalBackdrop, ModalContent } from "@gluestack-ui/themed";
import { useAtom } from "jotai";
import { memo, useRef, type ReactElement, useCallback } from "react";
import { isNewTodoModalOpenedAtom } from "../../context/newTodoModalContext";
import { MyModalBody } from "./MyModalBody";
import { MyModalHeader } from "./MyModalHeader";
import { MyModalFooter } from "./MyModalFooter";

function Component(): ReactElement {
  const [showModal, setShowModal] = useAtom(isNewTodoModalOpenedAtom);

  const closeModal = useCallback(() => setShowModal(false), [setShowModal]);
  const ref = useRef(null);
  return (
    <Modal isOpen={showModal} onClose={closeModal} finalFocusRef={ref}>
      <ModalBackdrop />
      <ModalContent borderRadius={15}>
        <MyModalHeader />
        <MyModalBody />

        <MyModalFooter closeModal={closeModal} />
      </ModalContent>
    </Modal>
  );
}
export const NewTodoModal = memo(Component);
