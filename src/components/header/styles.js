import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.blue};

  width: ${(props) => props.theme.dimensions.width}px;
  height: 12%;

  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;
`;
export const Button = styled.TouchableOpacity`
  margin-bottom: 2.8%;
  margin-left: 16px;
  margin-right: 16px;
`;

export const Img = styled.Image`
  width: 32px;
  height: 32px;

  margin-bottom: 2%;
`;
