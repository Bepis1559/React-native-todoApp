import { Box, Button, ButtonText, ModalFooter } from "@gluestack-ui/themed";
import { useSetAtom } from "jotai";
import {
  type ReactElement,
  memo,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import { allTodosAtom } from "../../context/allTodosContext";
import { TodoModel } from "../../models/TodoModel";

function Component(props: addModalFooterProps): ReactElement {
  const {
    closeModal,
    date,
    todoValue,
    isDateTimeEnabled,
    setTodoValue,
    setIsDateTimeEnabled,
  } = props;
  const setTodos = useSetAtom(allTodosAtom);
  const handleClose = useCallback(() => closeModal(), []);
  const handleAddingTodo = useCallback(() => {
    setTodos((prev) => {
      let dueDate = undefined;
      let dueTime = undefined;
      if (isDateTimeEnabled) {
        dueDate = date.toLocaleDateString();
        dueTime = date.toLocaleTimeString();
      }

      return [
        ...prev,
        new TodoModel(
          todoValue == "" ? "Empty todo" : todoValue,
          dueDate,
          dueTime,
        ),
      ];
    });
    closeModal();
    setIsDateTimeEnabled(false);
    setTodoValue("");
  }, [todoValue, date]);
  return (
    <ModalFooter marginTop={-10} justifyContent="space-between">
      <FooterButton closeModal={handleClose} actionType="negative" />
      <FooterButton closeModal={handleAddingTodo} actionType="primary" />
    </ModalFooter>
  );
}

export const MyModalFooter = memo(Component);

type footerButtonProps = {
  closeModal: () => void;
  actionType: "negative" | "primary";
};

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
