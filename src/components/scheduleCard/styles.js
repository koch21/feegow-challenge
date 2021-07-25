import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.lightGrey};

  width: ${(props) => props.theme.dimensions.width - 40}px;
  padding: 18px;
  border-radius: 16px;

  margin-top: 20px;
  align-self: center;
  justify-content: space-between;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Name = styled.Text`
  color: ${(props) => props.theme.colors.darkestGrey};

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.large};
`;
export const Function = styled.Text`
  color: ${(props) => props.theme.colors.darkestGrey};

  font-family: ${(props) => props.theme.fonts.medium};
  font-size: ${(props) => props.theme.fontSizes.small};
`;
export const Img = styled.Image`
  width: 58px;
  height: 58px;
  border-radius: 32px;

  margin: 12px;
`;
export const Body = styled.View`
  flex-direction: row;

  justify-content: space-between;
  margin-top: 16px;
`;
export const CentralizationView = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Place = styled.Text`
  color: ${(props) => props.theme.colors.darkestGrey};

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.smallest};
`;
export const Date = styled.Text`
  color: ${(props) => props.theme.colors.darkestGrey};

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.smallest};
`;
export const Hour = styled.Text`
  color: ${(props) => props.theme.colors.darkestGrey};

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.smallest};
`;
export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;
export const CancelButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.grey};

  padding: 12px 40px;
  border-radius: 12px;

  align-items: center;
  align-self: flex-end;
`;
export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.blue};

  padding: 12px 38px;
  border-radius: 12px;

  align-items: center;
  align-self: flex-end;
`;
export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.primary};

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.small};
`;
