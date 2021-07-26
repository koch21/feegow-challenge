import React from "react";
import { Container, Info, Name, Prof, Crm, Button, Foto } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { light } from "../../styles/themes/default";

// NAVIGATION
import { useNavigation } from "@react-navigation/native";

const DoctorCard = ({ item }) => {
  // Navigation
  const navigation = useNavigation();

  const {
    profissional_id,
    foto,
    tratamento,
    nome,
    conselho,
    documento_conselho,
  } = item;

  // foto de um doutor aleatorio
  const someDoctor = `https://iclinic-mkt.s3.amazonaws.com/ghost-images/images/2018/01/blog-como-ser-um-medico-bem-sucedido-5-atitudes-fundamentais.jpg`;

  return (
    <Container>
      <Foto source={{ uri: foto === null ? someDoctor : foto }} />
      <Info>
        <Name>
          {tratamento} {""}
          {String(nome).substr(0, 12)}
        </Name>
        <Prof>cirurgiao</Prof>
        <Crm>
          {conselho}: {documento_conselho}
        </Crm>
      </Info>

      {/* TODO: create a link in redux that pass the doctorId for doctorPerfil   */}
      <Button
        onPress={() => {
          navigation.navigate("DoctorProfile");
        }}
      >
        <MaterialIcons
          name="keyboard-arrow-right"
          size={29}
          color={light.colors.white}
        />
      </Button>
    </Container>
  );
};

export default DoctorCard;
