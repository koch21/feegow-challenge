import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";

import { Container, Box, Title, Text } from "./styles";

import ProfessionalFound from "../professionalFound";

const ProfessionalList = () => {
  // procurando o profissionais
  const [search, setSearch] = useState("");
  const searchUser = (text) => {
    if (text) {
      const professionalsFiltered = professionals.filter((item) => {
        const professionalsData = item.name
          ? item.name.toLowerCase()
          : "".toLowerCase();
        const textData = text.toLowerCase();
        return professionalsData.indexOf(textData) > -1;
      });
      setFilteredProfessionals(professionalsFiltered);
      setSearch(text);
    } else {
      setFilteredProfessionals(professionals);
      setSearch(text);
    }
  };

  return <ProfessionalFound />;
};

export default ProfessionalList;
