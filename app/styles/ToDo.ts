import type { StyleProp, ViewStyle } from "react-native";

const verticalDistance = 13.5;
export const todoStyle: StyleProp<ViewStyle> = {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: verticalDistance,
  paddingVertical: verticalDistance,
  paddingHorizontal: 10,
  borderRadius: 10,
  backgroundColor: "rgb(34, 34, 34)",
};
