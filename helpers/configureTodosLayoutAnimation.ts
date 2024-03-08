import { LayoutAnimation } from "react-native";

export function configureTodosLayoutAnimation() {
  LayoutAnimation.configureNext({
    duration: 250,
    create: { type: "linear", property: "opacity" },
    update: { type: "linear", property: "opacity" },
    delete: { type: "linear", property: "opacity" },
  });
}
