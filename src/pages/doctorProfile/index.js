import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";

// COMPONENTS
import DoctorProfileCard from "../../components/doctorProfileCard";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { goBackDoctor } from "../../store/ducks/doctorProfile";

const DoctorProfile = () => {
  const doctorprofile = useSelector((state) => state.doctorprofile);
  const dispatch = useDispatch();

  const goBack = (item) => {
    dispatch(goBackDoctor(item.profissional_id));
  };

  return (
    <Container>
      <FlatList
        data={doctorprofile}
        keyExtractor={(item) => String(item.profissional_id)}
        renderItem={({ item }) => (
          <DoctorProfileCard item={item} GoBackToList={goBack} />
        )}
      />
    </Container>
  );
};

export default DoctorProfile;
