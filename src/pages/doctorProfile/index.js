import React, { useEffect } from "react";
import { Container } from "./styles";

// Components
import DoctorPerfil from "../../components/doctorPerfil";
import { FlatList } from "react-native";

// NAVIGATION
import { useNavigation } from "@react-navigation/native";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchDoctors } from "../../store/fetchActions/index";

const DoctorProfile = () => {
  // Navigation
  const navigation = useNavigation();

  // Redux dispatch
  const dispatch = useDispatch();

  // Recebendo a lista doctors da store
  const doctorprofile = useSelector((state) => state.doctorprofile.content);

  // renderizando a lista de doutores
  useEffect(() => {
    dispatch(fetchSearchDoctors(0));
  }, [doctorprofile, dispatch]);

  return (
    <Container>
      <FlatList
        data={doctorprofile.information}
        keyExtractor={(item) => String(item.profissional_id)}
        renderItem={({ item }) => <DoctorPerfil item={item} />}
      />
    </Container>
  );
};

export default DoctorProfile;
