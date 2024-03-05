import { ReactElement } from "react";
import { AppContainer } from "../../wrappers/AppContainer";
import { ExpandedTodo } from "../../components/ExpandedTodo";
import { useLocalSearchParams } from "expo-router";
import { Box, Text } from "@gluestack-ui/themed";

type searchParamsType = {
  id: string;
};
export default function Page(): ReactElement {
  const { id } = useLocalSearchParams() as searchParamsType;
  return (
    <AppContainer>
      <ExpandedTodo />
      <Text>{id}</Text>
    </AppContainer>
  );
}
