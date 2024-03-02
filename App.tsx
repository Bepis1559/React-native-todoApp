import { VStack } from "@gluestack-ui/themed";
import React from "react";
import { AppContainer } from "./components/AppContainer";
import { AllToDos } from "./components/AllToDos";
import { AddBtn } from "./components/AddBtn";
export default function App() {
  return (
    <>
      <AppContainer>
        <VStack marginHorizontal={15} marginTop={"$16"}>
          <AllToDos />
        </VStack>
        <AddBtn />
      </AppContainer>
    </>
  );
}
