import React from "react";
import { Container } from "./styles";

import Header from "../../components/header";
import ProfessionalList from "../../components/professionalList";
import DoctorList from "../../components/doctorList";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <DoctorList />
      </Container>
    </>
  );
};

export default Home;
