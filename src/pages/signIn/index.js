import React, { useContext, useState } from "react";
import {
  Container,
  WelcomeTxt,
  InputView,
  InputTxt,
  LoginBtn,
  LoginTxt,
  SignupTxt,
  Button,
  Image,
  Header,
  Bottom,
} from "./styles";
import { AuthContext } from "../../context/authProvider";
import { light } from "../../styles/themes/default";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  return (
    <Container>
      <Header>
        <WelcomeTxt>BEM VINDO!</WelcomeTxt>
      </Header>
      <Bottom>
        <InputView>
          <InputTxt
            autoCorrect={false}
            autoCapitalize="none"
            autoCompleteType="email"
            onChangeText={(email) => setEmail(email.trim())}
            value={email}
            placeholder="Email..."
            placeholderTextColor={light.colors.darkestGrey}
          />
        </InputView>
        <InputView>
          <InputTxt
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(password) => setPassword(password.trim())}
            value={password}
            secureTextEntry={true}
            placeholder="Senha..."
            placeholderTextColor={light.colors.darkestGrey}
          />
        </InputView>
        <LoginBtn onPress={() => login(email, password)}>
          <LoginTxt>Entrar</LoginTxt>
        </LoginBtn>
        <Button onPress={() => navigation.navigate("SignUp")}>
          <SignupTxt>Não possui uma conta? Registre-se</SignupTxt>
        </Button>
      </Bottom>
    </Container>
  );
};

export default SignIn;
