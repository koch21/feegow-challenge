import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  width: 100%;
  height: 12%;

  background-color: ${(props) => props.theme.colors.blue};
`;
export const Button = styled.TouchableOpacity`
  margin-top: 12%;
  margin-left: 16px;
  margin-right: 16px;
`;

export const Img = styled.Image`
  margin-top: 12%;

  width: 32px;
  height: 32px;
`;
