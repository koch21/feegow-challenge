import styled from "styled-components/native";

// Pimeiro espaco cores, segundo tamanhos, terceiro alinhamentos

export const Container = styled.View`
  margin-top: 20px;
`;
export const Title = styled.Text`
  color: ${(props) => props.theme.colors.darkestGrey};

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.medium};

  align-self: center;
`;
