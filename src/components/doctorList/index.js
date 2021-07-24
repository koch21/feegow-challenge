import React, { useEffect } from "react";
import { FlatList } from "react-native";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { fetchAllDoctors } from "../../store/fetchActions/index";

// STYLES
import DoctorCard from "../doctorCard";
import { Container, Title } from "./styles";

const DoctorList = () => {
  // Recebendo o dispatch de fetchAllDoctors
  const doctors = useSelector((state) => state.doctors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllDoctors());
  }, [doctors, dispatch]);

  return (
    <Container>
      <Title>2 Dermatologistas encontrados</Title>
      <FlatList
        data={doctors.content}
        keyExtractor={({ profissional_id }) => profissional_id}
        renderItem={({ item }) =>
          item.conselho === "CRM" ? <DoctorCard item={item} /> : null
        }
      />
    </Container>
  );
};

export default DoctorList;
