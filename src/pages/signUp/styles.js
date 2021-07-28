import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.white};
  align-items: center;
  flex: 1;
`;
export const Header = styled.SafeAreaView`
  background-color: ${(props) => props.theme.colors.white};
  position: absolute;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 12%;
`;
export const CreateTxt = styled.Text`
  color: ${(props) => props.theme.colors.blue};
  margin-top: 12%;

  font-weight: bold;
  font-size: 25px;
`;
export const Image = styled.Image`
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 46px;

  top: 20%;
`;
export const Bottom = styled.View`
  align-items: center;
  width: 375px;
  height: 682px;
  top: 24%;
  padding-top: 20px;
`;
export const InputView = styled.View`
  background-color: ${(props) => props.theme.colors.white};
  width: 90%;
  height: 6%;
  padding: 1%;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 3%;
`;
export const InputTxt = styled.TextInput`
  color: ${(props) => props.theme.colors.secondary};
  height: 50px;
`;
export const RegisterTxt = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  font-size: 19px;
`;
export const RegisterBtn = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.blue};
  align-items: center;
  justify-content: center;
  width: 187px;
  height: 50px;
  border-radius: 25px;
  margin-top: 8.7%;
`;
export const Button = styled.TouchableOpacity``;
