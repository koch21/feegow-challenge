import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.white};
`;
export const Title = styled.Text`
  color: ${(props) => props.theme.colors.darkestGrey};

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 20px;

  margin-left: 22px;
  margin-top: 72px;
  margin-bottom: 22px;
`;
export const ButtonView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 22px;
`;
export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.blue};

  width: 170px;
  height: 50px;
  border-radius: 12px;

  align-items: center;
  justify-content: center;
`;
export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.primary};

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 15px;
`;
