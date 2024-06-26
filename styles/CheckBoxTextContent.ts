import type { StyleProp, ViewStyle } from "react-native";

export const TextCrossBoxStyle: StyleProp<ViewStyle> = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 10,
  bottom: 0,
};

export const TextCrossStyle: StyleProp<ViewStyle> = {
  width: "100%",
  height: 1,
  zIndex: 10,
  position: "absolute",
  backgroundColor: "white",
  left: 0,
  top: "50%",
  transformOrigin: "left",
};
