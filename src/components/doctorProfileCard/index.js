import React, { useState } from "react";
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
  ViewRow,
  Price,
  Value,
  Button,
  ButtonText,
  Ball,
} from "./styles";

// NAVIGATION
import { useNavigation } from "@react-navigation/native";

// STYLES
import { MaterialIcons } from "@expo/vector-icons";
import { light } from "../../styles/themes/default";

// PICKER
import { Picker } from "@react-native-picker/picker";

const DoctorProfileCard = ({ item, GoBackToList, ScheduleNew }) => {
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

  const [date, setDate] = useState();
  const [hour, setHour] = useState();

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
          color={light.colors.blue}
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
        <Local>Datas diponiveis:</Local>
        <Picker
          selectedValue={date}
          onValueChange={(itemValue, itemIndex) => setDate(itemValue)}
        >
          <Picker.Item
            style={{
              color: light.colors.darkestGrey,
              fontFamily: light.fonts.bold,
            }}
            label="21/07/1999"
            value="barra"
          />
          <Picker.Item
            style={{
              color: light.colors.darkestGrey,
              fontFamily: light.fonts.bold,
            }}
            label="21/08/1999"
            value="centro"
          />
          <Picker.Item
            style={{
              color: light.colors.darkestGrey,
              fontFamily: light.fonts.bold,
            }}
            label="21/09/1999"
            value="centro"
          />
          <Picker.Item
            style={{
              color: light.colors.darkestGrey,
              fontFamily: light.fonts.bold,
            }}
            label="21/10/1999"
            value="centro"
          />
        </Picker>

        <AvailableDate>Horarios diponiveis:</AvailableDate>
        <Picker
          selectedValue={hour}
          onValueChange={(itemValue, itemIndex) => setHour(itemValue)}
        >
          <Picker.Item
            style={{
              color: light.colors.darkestGrey,
              fontFamily: light.fonts.bold,
            }}
            label="14:00"
            value="14:00:00"
          />
          <Picker.Item
            style={{
              color: light.colors.darkestGrey,
              fontFamily: light.fonts.bold,
            }}
            label="15:00"
            value="15:00:00"
          />
          <Picker.Item
            style={{
              color: light.colors.darkestGrey,
              fontFamily: light.fonts.bold,
            }}
            label="16:00"
            value="16:00:00"
          />
          <Picker.Item
            style={{
              color: light.colors.darkestGrey,
              fontFamily: light.fonts.bold,
            }}
            label="17:00"
            value="17:00:00"
          />
        </Picker>
      </Body>

      <Footer>
        <ViewRow>
          <Price>Valor da consulta</Price>
          <Value>100R$</Value>
        </ViewRow>
        <Button onPress={() => ScheduleNew(date, hour)}>
          <ButtonText>Agendar</ButtonText>
        </Button>
      </Footer>
    </Container>
  );
};

export default DoctorProfileCard;
