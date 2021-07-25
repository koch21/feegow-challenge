import { DefaultTheme } from "@react-navigation/native";
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

export const light = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#f6f6f6",
    primary: "#f2f2f2",
    secondary: "#2a2a2a",

    white: "#fff",
    grey: "#aab1bf",
    lightGrey: "#f3f5f9",
    darkGrey: "#b5b5b5",
    darkestGrey: "#898989",
    blue: "#5c9bd4",
    green: "#6ab688",
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: "Inter_400Regular",
    medium: "Inter_500Medium",
    bold: "Inter_700Bold",
  },
  fontSizes: {
    ...DefaultTheme.fontSizes,
    smallest: 12,
    small: 15,
    medium: 17,
    large: 20,
    largest: 23,
  },
  dimensions: {
    ...DefaultTheme.dimensions,
    width: width,
    height: height,
  },
};
