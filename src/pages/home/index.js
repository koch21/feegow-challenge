import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Container, Title, ButtonView, Button, ButtonText } from "./styles";

// COMPONENTS
import DoctorCard from "../../components/doctorCard";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { fetchAllDoctors } from "../../store/fetchActions";

const Home = ({ navigation }) => {
  // Redux dispatch
  const dispatch = useDispatch();

  // Recebendo a lista doctors da store
  const doctors = useSelector((state) => state.doctors.content);

  // renderizando a lista de doutores
  useEffect(() => {
    dispatch(fetchAllDoctors(0));
  }, [doctors, dispatch]);

  return (
    <Container>
      <Title>Lista de medicos</Title>
      <FlatList
        data={doctors}
        keyExtractor={(item) => String(item.profissional_id)}
        renderItem={({ item }) => <DoctorCard item={item} />}
      />
    </Container>
  );
};

export default Home;
