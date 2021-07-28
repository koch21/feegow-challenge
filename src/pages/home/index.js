import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { Container, Title, ButtonView, Button, ButtonText } from "./styles";

// COMPONENTS
import DoctorCard from "../../components/doctorCard";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { fetchAllDoctors } from "../../store/fetchActions";
import { goTODoctor } from "../../store/ducks/doctorProfile";

const Home = ({ navigation }) => {
  const doctors = useSelector((state) => state.doctors.content);
  const dispatch = useDispatch();

  const fetchallDocs = async () => {
    try {
      dispatch(fetchAllDoctors(0));
    } catch (err) {
      console.log(err);
    }
  };

  fetchallDocs();

  const goTo = (item) => {
    dispatch(goTODoctor(item));
  };

  const renderItem = ({ item }) => <DoctorCard item={item} onPress={goTo} />;

  return (
    <Container>
      <Title>Lista de medicos</Title>
      <FlatList
        data={doctors}
        keyExtractor={(item) => String(item.profissional_id)}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default Home;
