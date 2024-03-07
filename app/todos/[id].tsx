import { ReactElement } from "react";
import { AppContainer } from "../../wrappers/AppContainer";
import { ExpandedTodo } from "../../components/ExpandedTodo";
import { useLocalSearchParams } from "expo-router";
import { Box, Text } from "@gluestack-ui/themed";

export default function Page(): ReactElement {
  const { id, isCompleted, value, dueDate } =
    useLocalSearchParams() as unknown as todoComponentProps;
  return (
    <AppContainer>
      <ExpandedTodo />
      <Text>{id}</Text>
      <Text>{isCompleted}</Text>
      <Text>{value}</Text>
      <Text>{dueDate}</Text>
    </AppContainer>
  );
}
