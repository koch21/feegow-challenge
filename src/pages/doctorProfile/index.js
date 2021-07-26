import React from "react";
import { Container } from "./styles";

// Components
import DoctorPerfil from "../../components/doctorPerfil";
import { FlatList } from "react-native";

const DoctorProfile = ({ navigation }) => {
  const fakeData = [
    {
      informacoes: [
        {
          CRM: "11.11111-1",
          CPF: "111.111.111-1",
          nome: "Vinicius",
          foto: "9fb966e7a2e981f16d5b56eea6d90323.jpg",
          data_nascimento: "02-05-1995",
          sexo: "Masculino",
          telefones: ["(21) 2767-1515", ""],
          celulares: ["(21) 9988-03190", ""],
          email: "vinicius.feegow@gmail.com",
          idade_minima: 13,
        },
      ],
      especialidades: [
        {
          especialidade_id: 5,
          nome_especialidade: "Dermatologia",
          CBOS: "225135",
        },
      ],
    },
  ];

  return (
    <Container>
      <FlatList
        data={fakeData}
        renderItem={({ item }) => <DoctorPerfil item={item} />}
      />
    </Container>
  );
};

export default DoctorProfile;
