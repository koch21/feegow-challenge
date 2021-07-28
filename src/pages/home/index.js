import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { Container, Title, ButtonView, Button, ButtonText } from "./styles";

// COMPONENTS
import DoctorCard from "../../components/doctorCard";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { fetchAllDoctors } from "../../store/fetchActions";
import { goTODoctor } from "../../store/ducks/doctorProfile";

export const sum = (a, b) => a + b;

const Home = ({ navigation }) => {
  const doctors = useSelector((state) => state.doctors.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllDoctors(0));
  }, [doctors, dispatch]);

  const goTo = (item) => {
    dispatch(goTODoctor(item));
  };

  return (
    <Container>
      <Title>Lista de medicos</Title>
      <FlatList
        data={doctors}
        keyExtractor={(item) => String(item.profissional_id)}
        renderItem={({ item }) => <DoctorCard item={item} goToDoctor={goTo} />}
      />
    </Container>
  );
};

export default Home;
