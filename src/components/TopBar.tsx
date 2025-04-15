import React from "react";
import styled from "styled-components/native";
import { Dimensions } from 'react-native';

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
      {leftIcon}
      <Text>{text}</Text>
      {rightIcon}
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
  background-color: white;
  z-index: 1000;
`

const Text = styled.Text``

export default TopBar
