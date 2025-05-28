import React from 'react';
import styled from 'styled-components/native';
import { color, Font } from '../styles';
import { ActivityIndicator } from 'react-native';

interface ButtonPropsType {
  text?: string;
  width?: string;
  onPress?: () => void;
  buttonColor?: keyof typeof color;
  textColor?: keyof typeof color;
  loading?: boolean;
}

export function Button({
  text,
  width = '100%',
  onPress,
  buttonColor = 'pink300',
  textColor = 'white',
  loading = false
}: ButtonPropsType) {
  return (
    <BasedButton
      width={width}
      paddingValue={14}
      onPress={onPress}
      buttonColor={color[buttonColor]}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={buttonColor === color.white ? color.pink300 : color.white}
        />
      ) : (
        <Font kind="semi16" text={text} color={textColor} />
      )}
    </BasedButton>
  );
}

const BasedButton = styled.TouchableOpacity<{
  width?: string;
  buttonColor?: string;
  paddingValue?: number;
}>`
  border-radius: 10px;
  width: ${({ width }) => width};
  max-height: 55px;
  background-color: ${({ buttonColor }) => buttonColor};
  padding-top: ${({ paddingValue }) => paddingValue};
  padding-bottom: ${({ paddingValue }) => paddingValue};
  justify-content: center;
  align-items: center;
`;
