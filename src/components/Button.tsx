import React from 'react';
import styled from 'styled-components/native';
import { color, Font } from '../styles';

interface ButtonPropsType {
  text?: string;
  width?: string;
  onPress?: () => void;
  primaryButton?: boolean;
}

export function AuthButton({ text, width='100%', onPress, primaryButton=true }: ButtonPropsType) {
  return (
    <BasedButton
      width={width}
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
  width?: string;
  primaryButton?: boolean;
  paddingValue?: number;
}>`
  width: ${({ width }) => width};
  max-height: 55px;
  border-radius: 5px;
  background-color: ${({ primaryButton }) =>
    primaryButton ? color.pink300 : color.white};
  padding-top: ${({ paddingValue }) => paddingValue};
  padding-bottom: ${({ paddingValue }) => paddingValue};
  justify-content: center;
  align-items: center;
`;
