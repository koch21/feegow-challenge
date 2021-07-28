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
    const { profissional_id, especialidade_id, date, hour } = ev;
    api.post(
      `/appoints/new-appoint?local_id=1&paciente_id%09=1&profissional_id%09=${profissional_id}&procedimento_id=5&especialidade_id=${especialidade_id}&data=${date}&horario=${hour}&valor=550&plano=1`
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
