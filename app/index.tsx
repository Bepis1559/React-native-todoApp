import { VStack } from "@gluestack-ui/themed";
import React from "react";
import { AllToDos } from "../components/AllToDos";
import { AddBtn } from "../components/AddBtn";
import { FullPageThemedBox } from "../wrappers/FullPageThemedBox";
export default function Page() {
  return (
    <FullPageThemedBox>
      <VStack marginHorizontal={15} marginVertical={15}>
        <AllToDos />
      </VStack>
      <AddBtn />
    </FullPageThemedBox>
  );
}
