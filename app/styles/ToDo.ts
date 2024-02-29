import type { StyleProp, ViewStyle } from "react-native";

const verticalDistance = 13.5;
export const todoStyle: StyleProp<ViewStyle> = {
  shadowColor: "black",
  shadowOffset: { height: 3, width: -3 },
  shadowOpacity: 0.6, // blur
  shadowRadius: 10, // spread
  flexDirection: "row",
  alignItems: "center",
  marginBottom: verticalDistance,
  paddingVertical: verticalDistance,
  paddingHorizontal: 10,
  borderRadius: 10,
  backgroundColor: "rgb(34, 34, 34)",
};
