import { VStack } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import React from "react";
import { AllToDos } from "../components/AllToDos";
import { AddBtn } from "../components/AddBtn";
import { FullPageThemedBox } from "../wrappers/FullPageThemedBox";
export default function Page() {
  return (
    <FullPageThemedBox>
      <VStack marginHorizontal={15} marginVertical={15}>
        <AllToDos />
        <Link href={"/user"}>Go to user</Link>
      </VStack>
      <AddBtn />
    </FullPageThemedBox>
  );
}
