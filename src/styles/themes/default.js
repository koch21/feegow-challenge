import { DefaultTheme } from "@react-navigation/native";

export const light = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#121212",
    secundary: "#f2f2f2",

    grey: "#cdcecd",
    lightGrey: "#e4e4e4",
    darkGrey: "#b5b5b5",
    darkestGrey: "#898989",
    blue: "#0392ea",
    red: "#ff4444",
  },
  fonts: {
    regular: "Inter_400Regular",
    medium: "Inter_500Medium",
    bold: "Inter_700Bold",
  },
  fontSizes: {
    ...DefaultTheme.fontSizes,
    small: 14,
    medium: 17,
    large: 20,
  },
};
