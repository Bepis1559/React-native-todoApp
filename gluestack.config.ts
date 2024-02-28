import { createConfig } from "@gluestack-ui/themed";
import { config as defaultConfig } from "@gluestack-ui/config";
export const config = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    fonts: {
      ...defaultConfig.tokens.fonts,
      heading: "Inter-Bold",
      body: "Inter-Bold",
      mono: "Inter-Bold",
    },
  },
});
