import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${(props) => props.theme.colors.white};
`;
export const Title = styled.Text`
  color: ${(props) => props.theme.colors.secondary};

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.large};

  margin-left: 22px;
  margin-top: 72px;
`;
