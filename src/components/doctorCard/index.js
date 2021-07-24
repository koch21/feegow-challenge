import React from "react";
import { Container, Name, Box, Crm, Button, ButtonText, Img } from "./styles";

const DoctorCard = ({ item }) => {
  const name = item.nome;
  const nome = String(name).substr(0, 19);
  return (
    <Container>
      <Img source={{ uri: item.foto }} />
      <Box>
        <Name>
          {item.tratamento} {""}
          {nome}
        </Name>
        <Crm>
          {item.conselho}: {item.documento_conselho}
        </Crm>
        <Button>
          <ButtonText>Agendar</ButtonText>
        </Button>
      </Box>
    </Container>
  );
};

export default DoctorCard;
