import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";

// importando api
import api from "../../services/api";

import {
  Container,
  Wrapper,
  Title,
  Name,
  Box,
  Crm,
  Button,
  ButtonText,
  Img,
} from "./styles";

const ProfessionalFound = () => {
  const [professionals, setProfessionals] = useState([]);
  const [filteredProfessionals, setFilteredProfessionals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Consumindo API
  useEffect(() => {
    try {
      api
        .get("/professional/list")
        .then((res) => {
          setProfessionals(res.data.content),
            setFilteredProfessionals(res.data.content);
        })
        .finally(() => setIsLoading(false));
    } catch (err) {
      console.error(err);
    }
  });

  useEffect(() => {
    const professionalsFiltered = professionals.filter((item) => {
      const professionalsData = item.conselho === "CRM";
      return professionalsData;
    });
    setFilteredProfessionals(professionalsFiltered);
  }, [professionals]);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <Container>
      <Title>2 Dermatologistas encontrados</Title>
      <FlatList
        data={filteredProfessionals}
        keyExtractor={({ profissional_id }) => profissional_id}
        renderItem={({ item }) => (
          <Wrapper>
            <Img source={{ uri: item.foto }} />
            <Box>
              <Name>
                {item.tratamento} {""}
                {item.nome.substr(0, 19)}
              </Name>
              <Crm>
                {item.conselho}: {item.documento_conselho}
              </Crm>
              {/* <FlatList
                data={item.especialidades}
                keyExtractor={({ especialidade_id }) => especialidade_id}
                renderItem={({ item }) => (
                  <View>
                  <Crm>{item.nome_especialidade}</Crm>
                  </View>
                  )}
                /> */}
              <Button>
                <ButtonText>Agendar</ButtonText>
              </Button>
            </Box>
          </Wrapper>
        )}
      />
    </Container>
  );
};

export default ProfessionalFound;
