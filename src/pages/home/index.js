import React from "react";
import { Container, Title } from "./styles";

import DoctorList from "../../components/doctorList";

const Home = ({ navigation }) => {
  return (
    <Container>
      <Title>Lista de Medicos</Title>
      <DoctorList />
    </Container>
  );
};

export default Home;
