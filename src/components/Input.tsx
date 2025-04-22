import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Font, color } from '../styles';
import { Eye, EyeClose } from '../assets';

interface InputProps {
  label?: string;
  placeholder?: string;
  password?: boolean;
  autoFocus?: boolean;
  value?: string;
  multiline?: boolean;
  readonly?: boolean;
  onChangeText?: (input: string) => void;
  onKeyPress?: (input: any) => void;
  width?: string;
  borderRadius?: number;
  padding?: string;
}

export const Input = ({
  label,
  placeholder,
  password,
  autoFocus,
  value,
  multiline,
  readonly,
  width = '100%',
  borderRadius = 10,
  padding = '18px 16px',
  onChangeText,
  onKeyPress,
}: InputProps) => {
  const [press, setPress] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <Container width={width}>
      {label && <Font kind="semi16" text={label} />}
      <InputContainerBox focused={isFocused} borderRadius={borderRadius}>
        <InputBox
          readOnly={readonly}
          value={value}
          autoFocus={autoFocus}
          secureTextEntry={password && !press}
          placeholder={placeholder}
          placeholderTextColor={color.gray400}
          padding={padding}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={onChangeText}
          onKeyPress={onKeyPress}
          multiline={multiline}
          enterKeyHint="go"
        />
        {password && (
          <PwButton onPress={() => setPress(!press)}>
            {press ? (
              <Eye size={36} color={color.gray500} />
            ) : (
              <EyeClose size={36} color={color.gray500} />
            )}
          </PwButton>
        )}
      </InputContainerBox>
    </Container>
  );
};

const Container = styled.View<{ width: string}>`
  width: ${({ width }) => width};
  gap: 6px;
`;

const InputBox = styled.TextInput<{ padding: string }>`
  flex: 1;
  padding: ${({ padding }) => padding}; 
  font-size: 16px;
  font-weight: 600;
  color: black;
`;

const InputContainerBox = styled.View<{ focused: boolean, borderRadius: number }>`
  width: 100%;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  align-items: center;
  flex-direction: row;
  background-color: ${color.white};
  overflow: hidden;
  border: 1px solid ${color.gray300};
  ${({ focused }) => focused && `border: 1px solid ${color.pink300}`};
`;

const PwButton = styled.Pressable`
  padding: 9.5px 16px;
`;
