import type { StyleProp, TextStyle, ViewStyle } from "react-native";

export const baseStyle: StyleProp<ViewStyle> = {
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

export const ExpandedTodoDateTimeSwtichStyle: StyleProp<ViewStyle> = {
  ...baseStyle,
  justifyContent: "flex-start",
  paddingVertical: 5,
  paddingHorizontal: 15,
};

type ExpanedTodoDateStyleType = {
  box: StyleProp<ViewStyle>;
  button: StyleProp<ViewStyle>;
};

export const ExpanedTodoDateStyle: ExpanedTodoDateStyleType = {
  box: {
    ...baseStyle,
    paddingVertical: 10,
    paddingLeft: 15,
  },
  button: {
    backgroundColor: "transparent",
    paddingHorizontal: 5,
  },
};

export function getExpandedTodo_contentInputStyle(tempCompleted: boolean) {
  const ExpandedTodo_contentInputStyle: StyleProp<TextStyle> = {
    flex: 1,
    lineHeight: 22,
    borderWidth: 0,
    textDecorationLine: tempCompleted ? "line-through" : "none",
    textDecorationStyle: "solid",
    color: tempCompleted ? "gray" : "white",
    textDecorationColor: "white",
    marginLeft: 9,
    paddingVertical: 6,
    fontSize: 16,
    fontFamily: "Inter-Bold",
  };
  return ExpandedTodo_contentInputStyle;
}

export const ExpandedTodoTextBoxStyle: StyleProp<ViewStyle> = {
  marginLeft: 3,
  paddingVertical: 9,
  marginRight: 12,
};

export const Date_Time_IconsStyle: StyleProp<ViewStyle> = {
  height: 24,
  width: 24,
};
export function getExpandedTodoTextStyle(tempCompleted: boolean) {
  const ExpandedTodoTextStyle: StyleProp<TextStyle> = {
    textDecorationStyle: "solid",
    textDecorationLine: tempCompleted ? "line-through" : "none",
    color: tempCompleted ? "gray" : "white",
  };
  return ExpandedTodoTextStyle;
}

export const Expanded_DeleteStyle: StyleProp<ViewStyle> = {
  borderRadius: 10,
  overflow: "hidden",
  alignSelf: "center",
  marginTop: "auto",
  marginBottom: 5,
};
