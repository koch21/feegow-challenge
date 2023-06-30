import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { Container, Title } from "./styles";

// COMPONENTS
import DoctorCard from "../../components/doctorCard";

const Home = ({ navigation }) => {
  const doctors = [
    {
      profissional_id: 123,
      name: "Dr. John Doe",
      specialty: "Cardiology",
    },
    {
      profissional_id: 456,
      name: "Dr. Jane Smith",
      specialty: "Dermatology",
    },
    // Outros perfis de médicos mocados...
  ];

  const goTo = (item) => {
    navigation.navigate("DoctorProfile", { item, navigation });
  };

  const renderItem = ({ item }) => <DoctorCard item={item} onPress={goTo} />;

  useEffect(() => {
    // Simulação do fetch dos médicos
    console.log("Fetching all doctors...");
  }, []);

  return (
    <Container>
      <Title>Lista de médicos</Title>
      <FlatList
        data={doctors}
        keyExtractor={(item) => String(item.profissional_id)}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default Home;
