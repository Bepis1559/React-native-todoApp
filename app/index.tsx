import { Box, VStack } from "@gluestack-ui/themed";
import React from "react";
import { AllToDos } from "../components/AllToDos";
import { AddBtn } from "../components/AddBtn";
import { AppContainer } from "../wrappers/AppContainer";
export default function Page() {
  return (
    <Box flex={1}>
      <AppContainer>
        <AllToDos />
      </AppContainer>
      <AddBtn />
    </Box>
  );
}
