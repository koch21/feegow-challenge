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

// STYLES
import { light } from "../../styles/themes/default";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import api from "../../services/api";

const ScheduleCard = ({ item, cancelSchedule, reSchedule }) => {
  const someDoctor = `https://iclinic-mkt.s3.amazonaws.com/ghost-images/images/2018/01/blog-como-ser-um-medico-bem-sucedido-5-atitudes-fundamentais.jpg`;

  return (
    <Container>
      <Header>
        <Name>{item.agendado_por}</Name>
      </Header>

      <Body>
        <CentralizationView>
          <MaterialCommunityIcons
            name="home"
            size={15}
            color={light.colors.darkestGrey}
          />
          <Place>{item.nome_fantasia}</Place>
        </CentralizationView>
        <CentralizationView>
          <MaterialCommunityIcons
            name="calendar"
            size={16}
            color={light.colors.darkestGrey}
          />
          <Date>{item.data}</Date>
        </CentralizationView>
        <CentralizationView>
          <MaterialCommunityIcons
            name="clock"
            size={16}
            color={light.colors.darkestGrey}
          />
          <Hour>{item.horario}</Hour>
        </CentralizationView>
      </Body>

      <Footer>
        <CancelButton onPress={() => cancelSchedule(item.agendamento_id)}>
          <ButtonText>Cancelar</ButtonText>
        </CancelButton>
        <Button onPress={() => reSchedule(item.agendamento_id)}>
          <ButtonText>Reagendar</ButtonText>
        </Button>
      </Footer>
    </Container>
  );
};

export default ScheduleCard;
