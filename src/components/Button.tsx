import React from 'react';
import styled from 'styled-components/native';
import { color, Font } from '../styles';
import { ActivityIndicator } from 'react-native';

interface ButtonPropsType {
  text?: string;
  width?: string;
  onPress?: () => void;
  primaryButton?: boolean;
  loading?: boolean;
}

export function Button({
  text,
  width = '100%',
  onPress,
  primaryButton = true,
  loading = false
}: ButtonPropsType) {
  return (
    <BasedButton
      width={width}
      primaryButton={primaryButton}
      paddingValue={14}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={primaryButton ? color.white : color.pink300}
        />
      ) : (
        <Font
          kind="semi16"
          text={text}
          color={primaryButton ? 'white' : 'pink300'}
        />
      )}
    </BasedButton>
  );
}

const BasedButton = styled.TouchableOpacity<{
  width?: string;
  primaryButton?: boolean;
  paddingValue?: number;
}>`
  border-radius: 10px;
  width: ${({ width }) => width};
  max-height: 55px;
  background-color: ${({ primaryButton }) =>
    primaryButton ? color.pink300 : color.white};
  padding-top: ${({ paddingValue }) => paddingValue};
  padding-bottom: ${({ paddingValue }) => paddingValue};
  justify-content: center;
  align-items: center;
`;
