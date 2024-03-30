import { Modal, ModalBackdrop, ModalContent } from "@gluestack-ui/themed";
import { useAtom } from "jotai";
import { memo, useRef, type ReactElement, useCallback, useState } from "react";
import { isNewTodoModalOpenedAtom } from "../../context/newTodoModalContext";
import { MyModalBody } from "./MyModalBody";
import { MyModalHeader } from "./MyModalHeader";
import { MyModalFooter } from "./MyModalFooter";
import { useDateTimePicker } from "../../hooks/useDateTimePicker";

function Component(): ReactElement {
  const [showModal, setShowModal] = useAtom(isNewTodoModalOpenedAtom);
  const [showMode, date] = useDateTimePicker();
  const [todoValue, setTodoValue] = useState("");

  const closeModal = useCallback(() => setShowModal(false), [setShowModal]);
  const ref = useRef(null);
  return (
    <Modal isOpen={showModal} onClose={closeModal} finalFocusRef={ref}>
      <ModalBackdrop />
      <ModalContent borderRadius={15}>
        <MyModalHeader />
        <MyModalBody
          showMode={showMode}
          todoValue={todoValue}
          setTodoValue={setTodoValue}
        />

        <MyModalFooter closeModal={closeModal} />
      </ModalContent>
    </Modal>
  );
}
export const NewTodoModal = memo(Component);
