import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.lightGrey};

  width: ${(props) => props.theme.dimensions.width - 40}px;
  border-radius: 16px;

  align-self: center;
  justify-content: space-between;
`;
export const Title = styled.Text`
  color: ${(props) => props.theme.colors.secondary};

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.large};

  margin-left: 22px;
  margin-top: 72px;
  margin-bottom: 22px;
`;
export const ButtonView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px 22px;
`;
export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.blue};

  padding: 12px 62px;
  border-radius: 12px;

  align-items: center;
  justify-content: center;
`;
export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.primary};

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.small};
`;
export const SendParamsButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.blue};

  width: 62px;
  height: 62px;
  border-radius: 31px;

  margin-top: 40px;
  align-self: center;
  align-items: center;
  justify-content: center;
`;
