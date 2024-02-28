import { CheckboxGroup } from "@gluestack-ui/themed";

import { VStack } from "@gluestack-ui/themed";
import React, { useState } from "react";
import { MyCheckBox } from "./components/MyCheckBox";
import { AppContainer } from "./components/AppContainer";
export default function App() {
  const [values, setValues] = useState([""]);

  return (
    <AppContainer>
      <VStack marginStart={16} marginEnd="auto" marginTop={"$16"} space="md">
        <CheckboxGroup
          accessibilityLabel="Checkbox Group"
          value={values}
          onChange={setValues}
          nativeID="checkbox-group">
          <MyCheckBox value="Do the dishes" />
          <MyCheckBox value="Do the laundry" />
          <MyCheckBox value="Do the homework" />
        </CheckboxGroup>
      </VStack>
    </AppContainer>
  );
}
