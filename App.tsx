import { CheckboxGroup } from "@gluestack-ui/themed";

import { VStack } from "@gluestack-ui/themed";
import React, { useState } from "react";
import { ToDo } from "./components/ToDo";
import { AppContainer } from "./components/AppContainer";
export default function App() {
  const [values, setValues] = useState([""]);

  return (
    <AppContainer>
      <VStack
        alignItems="flex-start"
        marginLeft={16}
        marginRight="auto"
        marginTop={"$16"}>
        <CheckboxGroup
          accessibilityLabel="Checkbox Group"
          value={values}
          onChange={setValues}
          nativeID="checkbox-group">
          <ToDo value="Do the dishes" />
          <ToDo value="Do the laundry" />
          <ToDo value="Do the homework" />
        </CheckboxGroup>
      </VStack>
    </AppContainer>
  );
}
