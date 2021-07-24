import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.primary};

  width: ${(props) => props.theme.dimensions.width - 40}px;
  padding: 12px;
  border-radius: 16px;

  margin-top: 20px;
  align-self: center;
  justify-content: space-between;
`;
export const Box = styled.View`
  justify-content: space-between;
`;
export const Name = styled.Text`
  color: ${(props) => props.theme.colors.darkestGrey};

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.large};

  margin-left: 80px;
`;
export const Crm = styled.Text`
  color: ${(props) => props.theme.colors.darkestGrey};

  font-family: ${(props) => props.theme.fonts.medium};
  font-size: ${(props) => props.theme.fontSizes.medium};

  margin-left: 80px;
`;
export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.blue};

  padding: 8px 12px;
  border-radius: 4px;

  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
`;
export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.primary};

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.small};
`;
export const Img = styled.Image`
  position: absolute;

  width: 64px;
  height: 64px;
  border-radius: 32px;

  margin: 12px;
`;
