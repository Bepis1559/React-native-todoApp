import type { StyleProp, ViewStyle } from "react-native";

export const todoStyle: StyleProp<ViewStyle> = {
  shadowColor: "black",
  //   ios and web
  shadowOffset: { height: 3, width: -3 },
  shadowOpacity: 0.6, // blur
  shadowRadius: 10, // spread
  elevation: 5,
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 15,
  paddingHorizontal: 9,
  borderRadius: 10,
  backgroundColor: "rgb(34, 34, 34)",
};
