import React from "react";
import { FlatList } from "react-native";
import {
  Container,
  Header,
  Foto,
  Name,
  Age,
  Expertise,
  Body,
  AvailableDate,
  Local,
  Footer,
  Button,
  ButtonText,
} from "./styles";

const DoctorPerfil = ({ item, addSchedule }) => {
  const {
    foto,
    tratamento,
    nome,
    data_nascimento,
    especialidades,
    CRM,
    CPF,
    sexo,
    telefones,
    celulares,
    email,
  } = item;

  // Calculando idade do Doutor pela data de nascimento
  const age = (data) => {
    const actualDate = new Date();
    const actualYear = actualDate.getFullYear();
    const birthday = data.getFullYear();
    const age = actualYear - birthday;
    return age;
  };

  // foto de um doutor aleatorio
  const someDoctor = `https://iclinic-mkt.s3.amazonaws.com/ghost-images/images/2018/01/blog-como-ser-um-medico-bem-sucedido-5-atitudes-fundamentais.jpg`;

  console.log(item);
  return (
    <Container>
      <Header>
        <Foto source={{ uri: foto === null ? someDoctor : foto }} />
        <Name>
          {tratamento} {nome}
        </Name>
        <Age>{age(new Date(`${data_nascimento}`))} Anos</Age>
        <FlatList
          data={especialidades}
          keyExtractor={(item) => String(item.especialidade_id)}
          renderItem={({ item }) => (
            <Expertise>{item.nome_especialidade}</Expertise>
          )}
        />
      </Header>

      <Body>
        <AvailableDate></AvailableDate>
        <Local></Local>
      </Body>

      <Footer>
        <Button>
          <ButtonText>Agendar</ButtonText>
        </Button>
      </Footer>
    </Container>
  );
};

export default DoctorPerfil;
