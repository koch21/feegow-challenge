import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.white};
  padding: 20px;
`;
export const Title = styled.Text`
  color: ${(props) => props.theme.colors.secondary};

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.large};

  margin-left: 2px;
  margin-top: 52px;
  margin-bottom: 22px;
`;
export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.lightGrey};

  height: 70%;
  border-radius: 16px;

  align-items: center;
  justify-content: center;
`;
export const Avatar = styled.Image`
  width: 220px;
  height: 220px;

  border-radius: 110px;
  margin-bottom: 20px;
`;
export const ConfigView = styled.TouchableOpacity`
  background: ${(props) => props.theme.colors.blue};

  width: 50%;
  border-radius: 8px;
  padding: 19px;

  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;
export const ConfigView1 = styled.TouchableOpacity`
  background: ${(props) => props.theme.colors.red};

  width: 50%;
  border-radius: 8px;
  padding: 19px;

  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;
export const ConfigText = styled.Text`
  color: ${(props) => props.theme.colors.primary};

  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 15px;

  align-self: center;
  margin-left: 18%;
`;
export const LogoutTxt = styled.Text`
  color: ${(props) => props.theme.colors.primary};

  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 15px;

  align-self: center;
  margin-left: 16%;
`;
