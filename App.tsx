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
          <ToDo id="1" value="Do the dishes" />
          <ToDo id="2" value="Do the laundry" />
          <ToDo id="3" value="Do the homework" />
        </CheckboxGroup>
      </VStack>
    </AppContainer>
  );
}
