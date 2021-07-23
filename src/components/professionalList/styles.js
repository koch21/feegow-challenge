import styled from "styled-components/native";

export const Container = styled.View``;
export const Title = styled.Text`
  color: ${(props) => props.theme.colors.secondary};

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.largest};

  align-self: center;
  margin-left: 12px;
`;
export const Text = styled.Text`
  color: ${(props) => props.theme.colors.blue};
`;
export const Box = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
