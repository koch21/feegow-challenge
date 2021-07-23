import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 12%;

  background-color: ${(props) => props.theme.colors.primary};
`;
export const Title = styled.Text`
  margin-top: 8%;

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 18px;
  color: #fff;
`;
