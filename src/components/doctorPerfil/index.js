import React from "react";
import { FlatList } from "react-native";
import {
  Container,
  InfoHeader,
  Foto,
  Name,
  Age,
  Expertise,
  InfoBody,
  AvailableDate,
  Local,
  InfoFooter,
  Button,
} from "./styles";

const DoctorPerfil = ({ item, addSchedule }) => {
  const { foto, nome, data_nascimento, especialidades } = item;

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

  return (
    <Container>
      <InfoHeader>
        <Foto source={{ uri: foto === null ? someDoctor : foto }} />
        <Name>{nome}</Name>
        <Age>{age(new Date(`${data_nascimento}`))}</Age>
        <FlatList
          data={especialidades}
          keyExtractor={(item) => String(item.especialidade_id)}
          renderItem={({ item }) => (
            <Expertise>{item.nome_especialidade}</Expertise>
          )}
        />
      </InfoHeader>

      <InfoBody>
        <AvailableDate></AvailableDate>
        <Local></Local>
      </InfoBody>

      <InfoFooter>
        <Button></Button>
      </InfoFooter>
    </Container>
  );
};

export default DoctorPerfil;
