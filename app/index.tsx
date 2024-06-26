// building command as APK - eas build -p android --profile preview
import { Box } from "@gluestack-ui/themed";
import React from "react";
import { AllToDos } from "../components/allTodos/AllToDos";
import { AddBtn } from "../components/allTodos/AddBtn";
import { AppContainer } from "../wrappers/AppContainer";
import { NewTodoModal } from "../components/addTodoModal/NewTodoModal";
export default function Page() {
  return (
    <Box flex={1}>
      <AppContainer>
        <NewTodoModal />
        <AllToDos />
      </AppContainer>
      <AddBtn />
    </Box>
  );
}
