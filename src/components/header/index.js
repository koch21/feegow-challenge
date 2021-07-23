import React from "react";
import { Container, Button, Img } from "./styles";

// importacoes de estilos
import { Feather } from "@expo/vector-icons";
import { light } from "../../styles/themes/default";

// logo do Header
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Container>
      <Button>
        <Feather name="menu" size={24} color={light.colors.primary} />
      </Button>

      <Img source={logo} />

      <Button>
        <Feather name="search" size={24} color={light.colors.primary} />
      </Button>
    </Container>
  );
};

export default Header;
