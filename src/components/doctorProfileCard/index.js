import React from "react";
import { FlatList } from "react-native";
import {
  Container,
  Header,
  BackButton,
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
  Ball,
} from "./styles";

// NAVIGATION
import { useNavigation } from "@react-navigation/native";

// STYLES
import { MaterialIcons } from "@expo/vector-icons";
import { light } from "../../styles/themes/default";

const DoctorProfileCard = ({ item, GoBackToList }) => {
  // Navigation
  const navigation = useNavigation();

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
      <BackButton
        onPress={() => {
          navigation.navigate("Home");
          GoBackToList(item);
        }}
      >
        <MaterialIcons
          name="keyboard-arrow-left"
          size={32}
          color={light.colors.white}
        />
      </BackButton>
      <Header>
        <Foto source={{ uri: item.foto === null ? someDoctor : item.foto }} />
        <Name>
          {item.tratamento} {item.nome}
        </Name>
        <FlatList
          data={item.especialidades}
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

export default DoctorProfileCard;
