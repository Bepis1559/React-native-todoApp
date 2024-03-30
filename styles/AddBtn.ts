import type { StyleProp, ViewStyle } from "react-native";

type addBtnStyleType = {
  Box: StyleProp<ViewStyle>;
};

export const addBtnStyle: addBtnStyleType = {
  Box: {
    shadowColor: "#4b8efa",
    //   ios and web
    shadowOpacity: 1, // blur
    shadowRadius: 20, // spread
    //
    elevation: 5,
    alignItems: "center",
    borderRadius: 100,
    justifyContent: "center",

    height: 38,
    width: 38,
    backgroundColor: "#3e85f7",
  },
};
