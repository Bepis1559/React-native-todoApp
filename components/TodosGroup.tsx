import { useEffect, type ReactElement } from "react";
import { Todo } from "../models/Todo";
import { ToDo } from "./ToDo";
import { Box, Text } from "@gluestack-ui/themed";

type props = {
  groupName: todosGroupsNames;
  todosGroup: Todo[];
};
export function TodosGroup({ todosGroup, groupName }: props): ReactElement {
  return (
    <Box>
      <Text
        marginLeft={4}
        marginTop={15}
        marginBottom={10}
        textTransform="uppercase">
        {groupName}
      </Text>
      {todosGroup.map(({ id, value, dueDate }) => (
        <ToDo key={id} id={id} value={value} dueDate={dueDate} />
      ))}
    </Box>
  );
}
