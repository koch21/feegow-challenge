import React from "react";
import {
  Container,
  Name,
  Function,
  Header,
  Body,
  CentralizationView,
  Place,
  Date,
  Hour,
  Footer,
  CancelButton,
  Button,
  ButtonText,
  Img,
} from "./styles";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { fetchAllDoctors } from "../../store/fetchActions/index";
import api from "../../services/api";

// STYLES
import { View } from "react-native";
import { light } from "../../styles/themes/default";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ScheduleCard = ({ item, removeSchedule }) => {
  const {
    data,
    horario,
    paciente_id,
    procedimento_id,
    status_id,
    local_id,
    profissional_id,
    unidade_id,
    nome_fantasia,
  } = item;

  // // Redux dispatch
  // const dispatch = useDispatch();

  // // Recebendo o dispatch de fetchAllDoctors
  // const doctors = useSelector((state) => state.doctors.content);

  // // renderizando a lista de doutores
  // useEffect(() => {
  //   dispatch(fetchAllDoctors(profissional_id));
  // }, [doctors, dispatch]);

  const someDoctor = `https://iclinic-mkt.s3.amazonaws.com/ghost-images/images/2018/01/blog-como-ser-um-medico-bem-sucedido-5-atitudes-fundamentais.jpg`;
  const nome = "Alberto";
  const Func = "Cirugiao";
  return (
    <Container>
      <Header>
        <View>
          <Name>{nome}</Name>
          <Function>{Func}</Function>
        </View>
        <Img source={{ uri: someDoctor }} />
      </Header>

      <Body>
        <CentralizationView>
          <MaterialCommunityIcons
            name="home"
            size={15}
            color={light.colors.darkestGrey}
          />
          <Place>{nome_fantasia}</Place>
        </CentralizationView>
        <CentralizationView>
          <MaterialCommunityIcons
            name="calendar"
            size={16}
            color={light.colors.darkestGrey}
          />
          <Date>{data}</Date>
        </CentralizationView>
        <CentralizationView>
          <MaterialCommunityIcons
            name="clock"
            size={16}
            color={light.colors.darkestGrey}
          />
          <Hour>{horario}</Hour>
        </CentralizationView>
      </Body>

      <Footer>
        <CancelButton onPress={() => removeSchedule(item)}>
          <ButtonText>Cancelar</ButtonText>
        </CancelButton>
        <Button onPress={() => removeSchedule(item)}>
          <ButtonText>Reagendar</ButtonText>
        </Button>
      </Footer>
    </Container>
  );
};

export default ScheduleCard;
