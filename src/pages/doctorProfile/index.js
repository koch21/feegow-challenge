import React from "react";
import { Container } from "./styles";

// Components
import DoctorPerfil from "../../components/doctorPerfil";

const DoctorProfile = ({ navigation }) => {
  const fakeData = [
    {
      profissional_id: 1,
      foto: null,
      tratamento: "Dr.",
      nome: "Julio",
      conselho: "CRM",
      documento_conselho: "2107",
    },
  ];
  return (
    <Container>
      <DoctorPerfil item={fakeData} />
    </Container>
  );
};

export default DoctorProfile;
