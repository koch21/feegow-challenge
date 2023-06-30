import "react-native-gesture-handler";
import React from "react";

// ROTAS
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "./src/context/authProvider";
import Routes from "./src/routes/routes";

// TEMA
import { ThemeProvider } from "styled-components";
import { light } from "./src/styles/themes/default";
import { StatusBar } from "expo-status-bar";

// GOOGLE FONTES
import {
  useFonts,
  Inter_100Thin,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

const App = () => {
  // Iniciando fonts do Google para que sejam aceitas em todos os components
  const [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  return (
    <ThemeProvider theme={light}>
      <NavigationContainer>
        <StatusBar style={light.colors.secondary} />
          <AuthProvider>
            <Routes />
          </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
