import React from "react";

// REDUX
import ScheduleList from "../../components/scheduleList";

// STYLES
import { Container, Title } from "./styles";

const Schedule = ({ navigation }) => {
  return (
    <Container>
      <Title>Agendadas</Title>
      <ScheduleList />
    </Container>
  );
};

export default Schedule;
