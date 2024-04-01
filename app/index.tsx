// building command as APK - eas build -p android --profile preview
import { Box, Button, ButtonText } from "@gluestack-ui/themed";
import React, { useEffect, useState } from "react";
import { AllToDos } from "../components/allTodos/AllToDos";
import { AddBtn } from "../components/allTodos/AddBtn";
import { AppContainer } from "../wrappers/AppContainer";
import { NewTodoModal } from "../components/addTodoModal/NewTodoModal";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebaseConfig";
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
