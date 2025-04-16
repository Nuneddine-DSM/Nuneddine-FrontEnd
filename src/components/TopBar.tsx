import React from "react";
import styled from "styled-components/native";
import { Dimensions } from 'react-native';
import { color, Font } from "../styles"

interface PropsType {
  text?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  padding?: number;
}

const screenWidth = Dimensions.get('window').width;

const TopBar = ({
  text = '',
  leftIcon,
  rightIcon,
  padding = 20
}: PropsType) => {
  return (
    <Container padding={padding} size={screenWidth}>
      {leftIcon || <Blank />}
      <Font text={text} kind="semi20" />
      {rightIcon || <Blank />}
    </Container>
  )
}

const Container = styled.View<{
  padding?: number,
  size?: number
}>`
  width: ${({ size }) => size}px;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  padding: ${({ padding }) => padding}px;
  flex-direction: row;
  background-color: ${color.white};
  z-index: 1000;
`

const Blank = styled.View`
  width: 20px;
  height: 20px;
`;

export default TopBar
