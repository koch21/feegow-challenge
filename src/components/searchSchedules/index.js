import React, { useEffect, useState } from "react";
import {
  Container,
  ButtonView,
  Button,
  ButtonText,
  SendParamsButton,
} from "./styles";

// NAVIGATION
import { useNavigation } from "@react-navigation/native";

// REDUX
import { useDispatch } from "react-redux";
import { fetchAvailableSchedules } from "../../store/fetchActions/index";

// PICKERS
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker } from "@react-native-picker/picker";

// STYLES
import { light } from "../../styles/themes/default";
import { Ionicons } from "@expo/vector-icons";

const SearchSchedules = () => {
  // Navigation
  const navigation = useNavigation();

  // Redux dispatch
  const dispatch = useDispatch();

  // Estados iniciais
  const [unit, setUnit] = useState("P");
  const [procedure, setProcedure] = useState("1");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  // Data inicial da consulta
  const [startPickerVisible, setStartPickerVisibility] = useState(false);
  const showStartDate = () => {
    setStartPickerVisibility(true);
  };
  const hideStartDatePicker = () => {
    setStartPickerVisibility(false);
  };
  const handleStartConfirm = (date) => {
    setStartDate(
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    );
    hideStartDatePicker();
  };

  // Data final da consulta
  const [endPickerVisible, setEndPickerVisibility] = useState(false);
  const showEndDate = () => {
    setEndPickerVisibility(true);
  };
  const hideEndDatePicker = () => {
    setEndPickerVisibility(false);
  };
  const handleEndConfirm = (date) => {
    setEndDate(
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    );
    hideEndDatePicker();
  };

  const params = {
    unit,
    procedure,
    startDate,
    endDate,
  };

  return (
    <>
      <Container>
        {/* DropDown Picker */}
        <Picker
          style={{ width: "90%", marginTop: 8, alignSelf: "center" }}
          selectedValue={unit}
          onValueChange={(itemValue, itemIndex) => setUnit(itemValue)}
        >
          <Picker.Item
            style={{
              color: light.colors.darkestGrey,
              fontFamily: light.fonts.bold,
            }}
            label="Procedimento"
            value="P"
          />
          <Picker.Item
            style={{
              color: light.colors.darkestGrey,
              fontFamily: light.fonts.bold,
            }}
            label="Especialidade"
            value="E"
          />
        </Picker>
        <Picker
          style={{ width: "90%", alignSelf: "center" }}
          selectedValue={procedure}
          onValueChange={(itemValue, itemIndex) => setProcedure(itemValue)}
        >
          <Picker.Item
            style={{
              color: light.colors.darkestGrey,
              fontFamily: light.fonts.bold,
            }}
            label="Cirurgia"
            value={1}
          />
          <Picker.Item
            style={{
              color: light.colors.darkestGrey,
              fontFamily: light.fonts.bold,
            }}
            label="Consulta"
            value={2}
          />
          <Picker.Item
            style={{
              color: light.colors.darkestGrey,
              fontFamily: light.fonts.bold,
            }}
            label="Exame"
            value={3}
          />
          <Picker.Item
            style={{
              color: light.colors.darkestGrey,
              fontFamily: light.fonts.bold,
            }}
            label="Procedimento"
            value={4}
          />
          <Picker.Item
            style={{
              color: light.colors.darkestGrey,
              fontFamily: light.fonts.bold,
            }}
            label="Retorno"
            value={9}
          />
        </Picker>
        <ButtonView>
          <Button onPress={showStartDate}>
            <ButtonText>de</ButtonText>
          </Button>
          <Button onPress={showEndDate}>
            <ButtonText>Até</ButtonText>
          </Button>
        </ButtonView>
        <DateTimePickerModal
          isVisible={startPickerVisible}
          mode="date"
          onConfirm={handleStartConfirm}
          onCancel={hideStartDatePicker}
        />
        <DateTimePickerModal
          isVisible={endPickerVisible}
          mode="date"
          onConfirm={handleEndConfirm}
          onCancel={hideEndDatePicker}
        />
      </Container>

      <SendParamsButton
        onPress={() => {
          dispatch(fetchAvailableSchedules(params));
        }}
      >
        <Ionicons
          name="ios-arrow-forward"
          size={28}
          color={light.colors.primary}
        />
      </SendParamsButton>
    </>
  );
};

export default SearchSchedules;
