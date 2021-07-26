import "react-native-gesture-handler";
import React from "react";

// ROTAS
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes/routes";

// STORE
import { Provider } from "react-redux";
import store from "./store";

// TEMA
import { ThemeProvider } from "styled-components";
import { light } from "./styles/themes/default";
import { StatusBar } from "expo-status-bar";

// GOOGLE FONTES
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

const App = () => {
  // Iniciando fonts do Google para que sejam aceitas em todos os components
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  return (
    <ThemeProvider theme={light}>
      <NavigationContainer>
        <StatusBar style={light.colors.secondary} />
        <Provider store={store}>
          <Routes />
        </Provider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
