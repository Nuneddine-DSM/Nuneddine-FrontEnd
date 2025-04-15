import React from 'react';
import styled from 'styled-components/native';
import { color, Font } from '../styles';

interface ButtonPropsType {
  text?: string;
  onPress?: () => void;
  primaryButton?: boolean;
}

export function AuthButton({ text, onPress, primaryButton }: ButtonPropsType) {
  return (
    <BasedButton
      primaryButton={primaryButton}
      paddingValue={14}
      onPress={onPress}>
      <Font
        kind="semi16"
        text={text}
        color={primaryButton ? 'white' : 'pink300'}
      />
    </BasedButton>
  );
}

const BasedButton = styled.TouchableOpacity<{
  primaryButton?: boolean;
  paddingValue?: number;
}>`
  width: 100%;
  border-radius: 5px;
  background-color: ${({ primaryButton }) =>
    primaryButton ? color.pink300 : color.white};
  padding-top: ${({ paddingValue }) => paddingValue};
  padding-bottom: ${({ paddingValue }) => paddingValue};
  justify-content: center;
  align-items: center;
`;
