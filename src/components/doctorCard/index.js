import React from "react";
import { FlatList } from "react-native";
import { Container, Info, Name, Prof, Crm, Button, Foto } from "./styles";

// STYLES
import { MaterialIcons } from "@expo/vector-icons";
import { light } from "../../styles/themes/default";

// NAVIGATION
import { useNavigation } from "@react-navigation/native";

const DoctorCard = ({ item, goToDoctor }) => {
  // Navigation
  const navigation = useNavigation();

  // foto de um doutor aleatorio
  const someDoctor = `https://iclinic-mkt.s3.amazonaws.com/ghost-images/images/2018/01/blog-como-ser-um-medico-bem-sucedido-5-atitudes-fundamentais.jpg`;
  return (
    <Container>
      <Foto source={{ uri: item.foto === null ? someDoctor : item.foto }} />
      <Info>
        <Name>
          {item.tratamento} {""}
          {String(item.nome).substr(0, 12)}
        </Name>
        <FlatList
          data={item.especialidades}
          keyExtractor={(item) => String(item.especialidade_id)}
          renderItem={({ item }) => (
            <Prof>{String(item.nome_especialidade).slice(0, 18)}</Prof>
          )}
        />
        <Crm>
          {item.conselho}: {item.documento_conselho}
        </Crm>
      </Info>

      {/* TODO: create a link in redux that pass the doctorId for doctorPerfil   */}
      <Button
        onPress={() => {
          goToDoctor(item);
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
