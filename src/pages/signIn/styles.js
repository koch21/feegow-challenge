import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.white};
  align-items: center;
  flex: 1;
`;
export const Header = styled.SafeAreaView`
  background-color: ${(props) => props.theme.colors.white};
  align-items: center;
  justify-content: center;
  margin-top: 12%;
  height: 12%;
`;
export const WelcomeTxt = styled.Text`
  color: ${(props) => props.theme.colors.blue};
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
  top: 6%;
  padding-top: 162px;
`;
export const InputView = styled.View`
  background-color: ${(props) => props.theme.colors.white};
  width: 90%;
  height: 8%;
  padding: 1%;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 3%;
`;
export const InputTxt = styled.TextInput`
  color: ${(props) => props.theme.colors.secondary};
  height: 50px;
`;
export const ForgotTxt = styled.Text`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 14px;
  margin-left: 51%;
  margin-bottom: 20%;
`;
export const LoginTxt = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  font-size: 19px;
`;
export const LoginBtn = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.blue};
  align-items: center;
  justify-content: center;
  width: 187px;
  height: 50px;
  border-radius: 25px;
  margin-bottom: 6%;
`;
export const SignupTxt = styled.Text`
  color: ${(props) => props.theme.colors.secondary};
`;
export const Button = styled.TouchableOpacity``;
