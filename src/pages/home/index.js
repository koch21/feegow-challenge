import React, { useState } from "react";
import { Container, Title } from "./styles";

import DoctorList from "../../components/doctorList";
import api from "../../services/api";
import { useEffect } from "react";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker } from "@react-native-picker/picker";

const Home = ({ navigation }) => {
  const [tipo, setTipo] = useState(["E", "P"]);
  const [procedimento_id, setProcedimento_id] = useState([1, 2, 3, 4, 5]);
  const [unidade_id, setUnidade_id] = useState(0);
  const [data_start, setData_start] = useState(`27-07-2021`);
  const [data_end, setData_end] = useState(`30-07-2021`);

  const [param, setParam] = useState({
    tipo: tipo,
    procedimento_id: procedimento_id,
    unidade_id: unidade_id,
    data_start: data_start,
    data_end: data_end,
  });

  const [data, setData] = useState([]);
  useEffect(() => {
    api.get("v2/appoints/available-schedule", param).then((res) => {
      return setData(res.data);
    });
  });
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <Container>
      <Title>Lista de Medicos</Title>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <DoctorList />
    </Container>
  );
};

export default Home;
