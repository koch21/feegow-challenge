import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// STYLES
import { Container, Title } from "./styles";
import { FlatList } from "react-native";

// COMPONENTS
import ScheduleCard from "../../components/scheduleCard";

const Schedule = ({ navigation }) => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const storedSchedules = JSON.parse(await AsyncStorage.getItem("schedules"));
        if (storedSchedules) {
          setSchedules(storedSchedules);
        } else {
          const defaultSchedules = [
            {
              id: Date.now(),
              doctorId: 123,
              date: "15-08-2021",
              time: "14:00:00",
            },
            {
              id: Date.now(),
              doctorId: 456,
              date: "16-08-2021",
              time: "10:30:00",
            },
          ];
          await AsyncStorage.setItem("schedules", JSON.stringify(defaultSchedules));
          setSchedules(defaultSchedules);
        }
      } catch (error) {
        console.log("Error retrieving or storing schedules in AsyncStorage:", error);
      }
    };

    fetchSchedules();
  }, []);

  // Function para cancelar um agendamento
  const cancel = (ev) => {
    // Simulação da chamada à API para cancelar o agendamento
    console.log("Cancelado");
  };

  // Function para re-agendar uma consulta
  const reschedule = (ev) => {
    // Simulação da chamada à API para reagendar a consulta
    console.log(ev + " Re-agendado");
  };

  return (
    <Container>
      <Title>Agendadas</Title>
      <FlatList
        data={schedules}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ScheduleCard item={item} reSchedule={reschedule} cancelSchedule={cancel} />
        )}
      />
    </Container>
  );
};

export default Schedule;
