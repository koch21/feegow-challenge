import React, { useEffect } from "react";
import { FlatList } from "react-native";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { fetchAllDoctors } from "../../store/fetchActions/index";
import { addSchedule } from "../../store/ducks/schedules/index";

// STYLES
import DoctorCard from "../doctorCard";
import { Container, Title } from "./styles";

const DoctorList = () => {
  // Redux dispatch
  const dispatch = useDispatch();

  // Recebendo o dispatch de fetchAllDoctors
  const doctors = useSelector((state) => state.doctors.content);

  // renderizando a lista de doutores
  useEffect(() => {
    dispatch(fetchAllDoctors());
  }, [doctors, dispatch]);

  // Function para agendar um novo horario
  const addNewSchedule = (item) => {
    dispatch(addSchedule(item));
  };

  return (
    <Container>
      <FlatList
        data={doctors}
        keyExtractor={(item) => String(item.profissional_id)}
        renderItem={({ item }) => (
          <DoctorCard item={item} addSchedule={addNewSchedule} />
        )}
      />
    </Container>
  );
};

export default DoctorList;
