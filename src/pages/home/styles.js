import styled from "styled-components/native";
import { StyleSheet } from "react-native";

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
  margin-bottom: 22px;
`;
export const InputView = styled.View`
  background-color: ${(props) => props.theme.colors.secundary};
  width: 90%;
  height: 8%;
  padding: 1%;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${(props) => props.theme.colors.primary};
  margin-bottom: 3%;
`;
export const Input = styled.TextInput`
  color: ${(props) => props.theme.colors.primary};
  height: 50px;
`;
