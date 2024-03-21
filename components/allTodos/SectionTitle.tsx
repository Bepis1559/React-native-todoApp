import { ReactElement, memo } from "react";
import { Text } from "@gluestack-ui/themed";

type props = {
  title: string;
};
const Component = ({ title }: props): ReactElement => {
  return (
    <Text
      style={{
        textTransform: "uppercase",
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 10,
      }}>
      {title}
    </Text>
  );
};

export const SectionTitle = memo(Component, () => true);
