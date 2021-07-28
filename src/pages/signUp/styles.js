import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.white};

  align-items: center;
`;
export const Header = styled.SafeAreaView`
  background-color: ${(props) => props.theme.colors.white};

  height: 12%;

  align-items: center;
  justify-content: center;
  margin-top: 12%;
`;
export const CreateTxt = styled.Text`
  color: ${(props) => props.theme.colors.blue};

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 23px;
`;

export const Bottom = styled.View`
  align-items: center;

  width: 375px;
  height: 682px;

  margin-top: 75px;
  padding-top: 20px;
`;
export const InputView = styled.View`
  background-color: ${(props) => props.theme.colors.white};

  width: 90%;
  height: 6%;
  padding: 1%;

  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${(props) => props.theme.colors.darkestGrey};

  margin-bottom: 3%;
`;
export const InputTxt = styled.TextInput`
  color: ${(props) => props.theme.colors.darkestGrey};

  height: 50px;

  font-family: ${(props) => props.theme.fonts.semibold};
  font-size: 13px;
`;
export const RegisterTxt = styled.Text`
  color: ${(props) => props.theme.colors.white};

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 17px;
`;
export const RegisterBtn = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.blue};

  width: 187px;
  height: 50px;
  border-radius: 25px;

  margin-top: 8.7%;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.TouchableOpacity``;
