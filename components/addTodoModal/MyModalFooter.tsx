import { Box, Button, ButtonText, ModalFooter } from "@gluestack-ui/themed";
import { useSetAtom } from "jotai";
import { type ReactElement, memo, useCallback } from "react";
import { allTodosAtom } from "../../context/allTodosContext";
import { TodoModel } from "../../models/TodoModel";
import { todosAndNotificatioIdAtom } from "../../context/todosAndNotificationIdContext";
import { v4 as uuidv4 } from "uuid";
import { attachNotificationToTodo } from "../../notifications/attachNotificationToTodo";
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
  const setTodosAndNotificationIds = useSetAtom(todosAndNotificatioIdAtom);
  const handleClose = useCallback(() => closeModal(), []);
  const addTodo = useCallback(async () => {
    const todoId = uuidv4();
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
          todoId,
          todoValue == "" ? "Empty todo" : todoValue,
          dueDate,
          dueTime,
        ),
      ];
    });
    closeModal();
    setIsDateTimeEnabled(false);
    setTodoValue("");

    attachNotificationToTodo(
      isDateTimeEnabled,
      todoId,
      setTodosAndNotificationIds,
      todoValue,
      date,
    );
  }, [todoValue, date]);
  return (
    <ModalFooter marginTop={-10} justifyContent="space-between">
      <FooterButton closeModal={handleClose} actionType="negative" />
      <FooterButton
        closeModal={async () => await addTodo()}
        actionType="primary"
      />
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
