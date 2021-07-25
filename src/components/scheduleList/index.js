import React, { useEffect } from "react";
import { FlatList } from "react-native";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { fetchAllSchedules } from "../../store/fetchActions/index";
import { removeSchedule } from "../../store/ducks/schedules/index";

// STYLES
import ScheduleCard from "../scheduleCard";
import { Container } from "./styles";

const ScheduleList = ({ navigation }) => {
  // Redux dispatch
  const dispatch = useDispatch();

  // Recebendo o dispatch de fetchAllSchedules
  const schedules = useSelector((state) => state.schedules);

  // renderizando a lista de agendamentos
  useEffect(() => {
    dispatch(fetchAllSchedules());
  }, [schedules, dispatch]);

  // Function para remover um agendamento
  const removeNewSchedule = (item) => {
    dispatch(removeSchedule(item));
  };

  const fakedata = [
    {
      agendamento_id: 30,
      data: "07-08-2018",
      horario: "09:00:00",
      paciente_id: 100003,
      procedimento_id: 3,
      status_id: 1,
      local_id: 0,
      profissional_id: 1,
      unidade_id: 1,
      nome_fantasia: "Filial 1",
    },
    {
      agendamento_id: 35,
      data: "06-08-2018",
      horario: "08:00:00",
      paciente_id: 100003,
      procedimento_id: 3,
      status_id: 1,
      local_id: 0,
      profissional_id: 1,
      unidade_id: 1,
      nome_fantasia: "Filial 2",
    },
  ];

  return (
    <Container>
      <FlatList
        data={fakedata}
        keyExtractor={(item) => String(item.agendamento_id)}
        renderItem={({ item }) => (
          <ScheduleCard
            item={item}
            removeSchedule={removeNewSchedule}
            navigation={navigation}
          />
        )}
      />
    </Container>
  );
};

export default ScheduleList;
