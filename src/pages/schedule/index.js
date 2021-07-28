import React, { useEffect } from "react";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { fetchAllSchedules } from "../../store/fetchActions/index";
import { cancelSchedule, reSchedule } from "../../store/ducks/schedules/index";

// STYLES
import { Container, Title } from "./styles";
import { FlatList } from "react-native";

// COMPONENTS
import ScheduleCard from "../../components/scheduleCard";
import api from "../../services/api";

const Schedule = ({ navigation }) => {
  // Redux dispatch
  const dispatch = useDispatch();

  // Recebendo o dispatch de fetchAllSchedules
  const schedules = useSelector((state) => state.schedules.content);

  const today = new Date();
  const params = {
    startDate:
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear(),
    endDate:
      today.getDate() +
      "-" +
      (today.getMonth() + 4) +
      "-" +
      today.getFullYear(),
  };

  const startDate =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  // renderizando a lista de agendamentos
  useEffect(() => {
    dispatch(fetchAllSchedules(params));
  });

  // Function para cancelar um agendamento
  const cancel = (ev) => {
    api
      .post(`/appoints/cancel-appoint?agendamento_id=${ev}&motivo_id=1`)
      .then(() => {
        console.log("Cancelado");
      });
  };

  // Function para re-agendar uma consulta
  const reschedule = (ev) => {
    api
      .post(
        `/appoints/reschedule?agendamento_id=${ev}&motivo_id=1&data=15-08-2021&horario=14%3A00%3A00`
      )
      .then(() => {
        console.log(ev + "Re-agendado");
      });
  };

  return (
    <Container>
      <Title>Agendadas</Title>
      <FlatList
        data={schedules}
        keyExtractor={(item) => String(item.agendamento_id)}
        renderItem={({ item }) => (
          <ScheduleCard
            item={item}
            reSchedule={reschedule}
            cancelSchedule={cancel}
          />
        )}
      />
    </Container>
  );
};

export default Schedule;
