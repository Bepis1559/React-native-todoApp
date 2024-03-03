import { ReactElement } from "react";
import { FullPageThemedBox } from "../../wrappers/FullPageThemedBox";
import { ExpandedTodo } from "../../components/ExpandedTodo";
import { useLocalSearchParams } from "expo-router";
import { Box, Text } from "@gluestack-ui/themed";

type searchParamsType = {
  id: string | number;
};
export default function Page(): ReactElement {
  const { id } = useLocalSearchParams() as searchParamsType;
  return (
    <FullPageThemedBox>
      <ExpandedTodo />
      <Text>{id}</Text>
    </FullPageThemedBox>
  );
}
