import { LayoutAnimation } from "react-native";

export function configureTodosLayoutAnimation(animationDuration: number) {
  LayoutAnimation.configureNext({
    duration: animationDuration + 100,
    create: { type: "linear", property: "scaleXY" },
    update: { type: "linear", property: "scaleXY" },
    delete: { type: "linear", property: "scaleXY" },
  });
}
