import React from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

// COMPONENTS
import DoctorProfileCard from "../../components/doctorProfileCard";

const DoctorProfile = () => {
  const navigation = useNavigation();
  const doctorprofile = [
    {
      profissional_id: 123,
      name: "Dr. John Doe",
      specialty: "Cardiology",
    },
    {
      profissional_id: 456,
      name: "Dr. Jane Smith",
      specialty: "Dermatology",
    },
    // Outros perfis de médicos mocados...
  ];

  const goBack = () => {
    navigation.goBack();
  };

  const Agendar = async (ev) => {
    try {
      const appointment = {
        id: Date.now(),
        doctorId: ev.profissional_id,
        date: "15-08-2021",
        time: "14:00:00",
      };
  
      const storedSchedules = JSON.parse(await AsyncStorage.getItem("schedules")) || [];
      const updatedSchedules = [...storedSchedules, appointment];
  
      await AsyncStorage.setItem("schedules", JSON.stringify(updatedSchedules));
  
      console.log("Agendada");
    } catch (error) {
      console.log("Error storing appointment in AsyncStorage:", error);
    }
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
