import { DefaultTheme } from "@react-navigation/native";
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

export const light = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#f2f2f2",
    secondary: "#121212",

    grey: "#cdcecd",
    lightGrey: "#e4e4e4",
    darkGrey: "#b5b5b5",
    darkestGrey: "#898989",
    blue: "#5799ba",
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
