import React, { useContext, useState } from "react";
import {
  Container,
  WelcomeTxt,
  InputView,
  InputTxt,
  LoginBtn,
  LoginTxt,
  ForgotTxt,
  SignupTxt,
  Button,
  Image,
  Header,
  Bottom,
} from "./styles";
import { AuthContext } from "../../context/authProvider";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  return (
    <Container>
      <Header>
        <WelcomeTxt>Welcome Back!</WelcomeTxt>
      </Header>
      <Image source={require("../../assets/logo.png")} />
      <Bottom>
        <InputView>
          <InputTxt
            autoCorrect={false}
            autoCapitalize="none"
            autoCompleteType="email"
            onChangeText={(email) => setEmail(email.trim())}
            value={email}
            placeholder="Email address"
            placeholderTextColor="#121212"
          />
        </InputView>
        <InputView>
          <InputTxt
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(password) => setPassword(password.trim())}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#121212"
          />
        </InputView>
        <LoginBtn onPress={() => login(email, password)}>
          <LoginTxt>Login</LoginTxt>
        </LoginBtn>
        <Button onPress={() => navigation.navigate("SignUp")}>
          <SignupTxt>Don’t have an account? Sign Up</SignupTxt>
        </Button>
      </Bottom>
    </Container>
  );
};

export default SignIn;
