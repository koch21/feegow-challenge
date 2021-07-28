import React, { useEffect, useState } from "react";
import {
  Container,
  ButtonView,
  Button,
  ButtonText,
  SendParamsButton,
} from "./styles";

// PICKERS
import { Picker } from "@react-native-picker/picker";

// STYLES
import { light } from "../../styles/themes/default";
import { Ionicons } from "@expo/vector-icons";

const SearchDoctor = () => {
  // Estados iniciais
  const [unit, setUnit] = useState(0);
  const [specialty, setSpecialty] = useState();

  const params = {
    unit,
    specialty,
  };

  return (
    <>
      <Container>
        {/* DropDown Picker */}
        <Picker
          style={{ width: "90%", alignSelf: "center" }}
          selectedValue={unit}
          onValueChange={(itemValue, itemIndex) => setUnit(itemValue)}
        >
          <Picker.Item
            style={{
              color: light.colors.darkestGrey,
              fontFamily: light.fonts.bold,
            }}
            label="Matriz"
            value={0}
          />
          <Picker.Item
            style={{
              color: light.colors.darkestGrey,
              fontFamily: light.fonts.bold,
            }}
            label="Filial 1"
            value={1}
          />
          <Picker.Item
            style={{
              color: light.colors.darkestGrey,
              fontFamily: light.fonts.bold,
            }}
            label="Filial 2"
            value={2}
          />
        </Picker>
      </Container>

      <SendParamsButton onPress={() => {}}>
        <Ionicons
          name="ios-arrow-forward"
          size={28}
          color={light.colors.primary}
        />
      </SendParamsButton>
    </>
  );
};

export default SearchDoctor;
