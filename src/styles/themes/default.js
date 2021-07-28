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
    darkBlue: "#1f3f6f",
    red: "#e05d44",
    green: "#6ab688",
  },
  fonts: {
    ...DefaultTheme.fonts,
    thin: "Inter_100Thin",
    regular: "Inter_400Regular",
    medium: "Inter_500Medium",
    semibold: "Inter_600SemiBold",
    bold: "Inter_700Bold",
  },
  dimensions: {
    ...DefaultTheme.dimensions,
    width: width,
    height: height,
  },
};
