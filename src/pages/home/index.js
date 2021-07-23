import React from "react";
import { Container } from "./styles";

import Header from "../../components/header";
import ProfessionalList from "../../components/professionalList";
import ProfessionalFound from "../../components/professionalFound";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <ProfessionalFound />
      </Container>
    </>
  );
};

export default Home;
