import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.lightGrey};
  flex: 1;
`;
export const Header = styled.View`
  height: ${(props) => props.theme.dimensions.width - 110}px;

  padding: 22px;

  align-items: center;
  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;

  margin-top: 62px;
  margin-left: 12px;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
`;
export const Foto = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 55px;

  margin-top: 48px;
`;
export const Name = styled.Text`
  color: ${(props) => props.theme.colors.darkestGrey};

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 20px;

  margin-top: 12px;
`;
export const Age = styled.Text`
  color: ${(props) => props.theme.colors.darkestGrey};

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 13px;

  margin-top: 8px;
`;
export const Expertise = styled.Text`
  color: ${(props) => props.theme.colors.darkestGrey};

  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 13px;
`;
export const Body = styled.View`
  background-color: ${(props) => props.theme.colors.white};

  height: ${(props) => props.theme.dimensions.width}px;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;

  padding: 22px;
  justify-content: center;
`;
export const AvailableDate = styled.Text`
  color: ${(props) => props.theme.colors.darkestGrey};

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 13px;

  margin-top: 16px;
`;
export const Local = styled.Text`
  color: ${(props) => props.theme.colors.darkestGrey};

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 13px;
`;
export const Footer = styled.View`
  background-color: ${(props) => props.theme.colors.primary};

  height: ${(props) => props.theme.dimensions.width - 300}px;

  align-items: center;
  justify-content: space-around;
`;
export const ViewRow = styled.View`
  flex-direction: row;

  width: 100%;

  padding: 0 14px;
  justify-content: space-between;
`;
export const Price = styled.Text`
  color: ${(props) => props.theme.colors.darkestGrey};

  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 17px;
`;
export const Value = styled.Text`
  color: ${(props) => props.theme.colors.darkestGrey};

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 17px;

  margin-right: 2px;
`;
export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.blue};

  width: ${(props) => props.theme.dimensions.width - 20}px;
  padding: 16px 0;
  border-radius: 12px;

  align-items: center;
  margin-bottom: 8px;
`;
export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.primary};

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 17px;
`;
