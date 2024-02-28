import { CheckboxGroup } from "@gluestack-ui/themed";

import { VStack } from "@gluestack-ui/themed";
import React, { useState } from "react";
import { ToDo } from "./components/ToDo";
import { AppContainer } from "./components/AppContainer";
import { AllToDos } from "./components/AllToDos";
export default function App() {
  return (
    <AppContainer>
      <VStack
        alignItems="flex-start"
        marginLeft={16}
        marginRight="auto"
        marginTop={"$16"}>
        <AllToDos />
      </VStack>
    </AppContainer>
  );
}
