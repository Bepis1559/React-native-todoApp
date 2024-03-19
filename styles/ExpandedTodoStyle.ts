import type { StyleProp, ViewStyle } from "react-native";

const baseStyle: StyleProp<ViewStyle> = {
  shadowColor: "black",
  elevation: 5,
  flexDirection: "row",
  alignItems: "center",
  marginHorizontal: 10,
  marginVertical: 10,
  borderRadius: 10,
  backgroundColor: "rgb(34, 34, 34)",
};

export const ExpandedTodoStyle: StyleProp<ViewStyle> = {
  ...baseStyle,
  paddingVertical: 20,
  paddingHorizontal: 5,
};

export const ExpanedTodoRemarksStyle: StyleProp<ViewStyle> = {
  ...baseStyle,
  paddingVertical: 10,
  paddingLeft: 10,
};
