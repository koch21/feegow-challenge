import React, { useContext } from "react";
import {
  Container,
  Title,
  Wrapper,
  ConfigView,
  ConfigView1,
  LogoutTxt,
  ConfigText,
  Avatar,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";

import { AuthContext } from "../../context/authProvider";
import { light } from "../../styles/themes/default";

const Profile = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  const img = { uri: "https://github.com/koch21.png" };

  return (
    <Container>
      <Title>Perfil</Title>
      <Wrapper>
        <Avatar source={img} />
        <ConfigView onPress={() => {}}>
          <Ionicons
            name="settings-outline"
            size={20}
            color={light.colors.primary}
          />
          <ConfigText>Settings</ConfigText>
        </ConfigView>
        <ConfigView1 onPress={() => logout()}>
          <Ionicons
            name="ios-exit-outline"
            size={24}
            color={light.colors.primary}
          />
          <LogoutTxt>Logout</LogoutTxt>
        </ConfigView1>
      </Wrapper>
    </Container>
  );
};

export default Profile;
