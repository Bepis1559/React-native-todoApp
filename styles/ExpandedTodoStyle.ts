import type { StyleProp, TextStyle, ViewStyle } from "react-native";

const baseStyle: StyleProp<ViewStyle> = {
  shadowColor: "black",
  elevation: 5,
  flexDirection: "row",
  alignItems: "center",
  marginHorizontal: 12,
  marginVertical: 10,
  borderRadius: 10,
  backgroundColor: "rgb(34, 34, 34)",
};

export const ExpandedTodoStyle: StyleProp<ViewStyle> = {
  ...baseStyle,
  paddingVertical: 10,
  paddingHorizontal: 15,
};

export const ExpanedTodoRemarksStyle: StyleProp<ViewStyle> = {
  ...baseStyle,
  paddingVertical: 10,
  paddingLeft: 15,
};

export function getExpandedTodo_contentInputStyle(tempCompleted: boolean) {
  const ExpandedTodo_contentInputStyle: StyleProp<TextStyle> = {
    flex: 1,
    borderWidth: 0,
    textDecorationLine: tempCompleted ? "line-through" : "none",
    textDecorationStyle: "solid",
    textDecorationColor: "white",
    marginHorizontal: 0,
    color: "white",
    paddingVertical: 6,
    fontSize: 16,
    fontFamily: "Inter-Bold",
  };
  return ExpandedTodo_contentInputStyle;
}
