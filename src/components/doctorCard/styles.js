import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.lightGrey};

  width: ${(props) => props.theme.dimensions.width - 40}px;
  padding: 20px;
  border-radius: 16px;

  margin-top: 16px;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
`;
export const Foto = styled.Image`
  position: absolute;

  width: 80px;
  height: 80px;
  border-radius: 20px;

  margin-left: 16px;
  align-self: center;
  margin-top: 16px;
`;
export const Info = styled.View`
  margin-left: 86px;
  justify-content: center;
  flex-direction: column;
`;
export const Name = styled.Text`
  color: ${(props) => props.theme.colors.darkestGrey};

  margin-bottom: 4px;

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 17px;
`;
export const Prof = styled.Text`
  color: ${(props) => props.theme.colors.darkestGrey};

  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 17px;
`;
export const Crm = styled.Text`
  color: ${(props) => props.theme.colors.darkestGrey};

  margin-top: 4px;
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 15px;
`;
export const Button = styled.TouchableOpacity`
  position: absolute;

  background-color: ${(props) => props.theme.colors.blue};

  width: 40px;
  height: 40px;
  border-radius: 20px;

  margin-left: ${(props) => props.theme.dimensions.width - 96}px;
  align-self: center;
  align-items: center;
  justify-content: center;
`;
export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.primary};

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 15px;
`;
