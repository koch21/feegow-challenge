import React, { useContext, useState } from "react";
import {
  Container,
  CreateTxt,
  InputView,
  InputTxt,
  RegisterBtn,
  RegisterTxt,
  Image,
  Header,
  Bottom,
} from "./styles";
import { AuthContext } from "../../context/authProvider";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [HasError, setHasError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register } = useContext(AuthContext);

  const handleSubmit = async () => {
    if (password !== repassword) {
      throw setHasError("Passwords do not match");
    }
    try {
      setLoading(true);
      await register(email, password);
    } catch {
      setHasError("Failed to create an account");
    }

    setLoading(false);
  };

  return (
    <Container>
      <Header>
        <CreateTxt>Create Account</CreateTxt>
      </Header>
      <Image source={require("../../assets/logo.png")} />
      <Bottom>
        <InputView>
          <InputTxt
            autoCorrect={false}
            autoCapitalize="none"
            autoCompleteType="email"
            placeholder="Email..."
            placeholderTextColor="#121212"
            onChangeText={(email) => setEmail(email)}
            value={email}
          />
        </InputView>
        <InputView>
          <InputTxt
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder="Password..."
            placeholderTextColor="#121212"
            onChangeText={(password) => setPassword(password)}
            value={password}
          />
        </InputView>
        <InputView>
          <InputTxt
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder="Confirm Password..."
            placeholderTextColor="#121212"
            onChangeText={(repassword) => setRepassword(repassword)}
            value={repassword}
          />
        </InputView>
        <RegisterBtn disabled={loading} onPress={() => handleSubmit()}>
          <RegisterTxt>Register</RegisterTxt>
        </RegisterBtn>
      </Bottom>
    </Container>
  );
};

export default SignUp;
