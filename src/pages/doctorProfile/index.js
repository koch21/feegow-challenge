import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";

// COMPONENTS
import DoctorProfileCard from "../../components/doctorProfileCard";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { goBackDoctor } from "../../store/ducks/doctorProfile";

// API
import api from "../../services/api";

const DoctorProfile = () => {
  const doctorprofile = useSelector((state) => state.doctorprofile);
  const dispatch = useDispatch();

  const goBack = (item) => {
    dispatch(goBackDoctor(item.profissional_id));
  };

  // Function para agendar uma consulta
  const Agendar = (ev) => {
    api.post(
      `https://api.feegow.com/v1/api/appoints/reschedule?agendamento_id=27146&motivo_id=1&data=15-08-2021&horario=19%3A00%3A00`
    );
    console.log("Agendada");
  };

  return (
    <Container>
      <FlatList
        data={doctorprofile}
        keyExtractor={(item) => String(item.profissional_id)}
        renderItem={({ item }) => (
          <DoctorProfileCard
            item={item}
            GoBackToList={goBack}
            ScheduleNew={Agendar}
          />
        )}
      />
    </Container>
  );
};

export default DoctorProfile;
