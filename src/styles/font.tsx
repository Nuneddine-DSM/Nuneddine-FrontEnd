import React from 'react';
import { Text, TextStyle } from 'react-native';
import { color } from './color';

interface FontPropsType {
  text?: string;
  kind?: keyof typeof fonts;
  color?: keyof typeof color;
  style?: TextStyle;
  numberOfLines?: number;
  ellipsizeMode?: 'clip' | 'head' | 'middle' | 'tail';
}

export const Font = ({
  ellipsizeMode,
  text,
  kind = '',
  color: textColor = 'black',
  numberOfLines,
  style
}: FontPropsType) => {
  const textColorStyle = textColor ? { color: color[textColor] } : {};
  return (
    <Text
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines}
      style={{ ...fonts[kind], ...textColorStyle, ...style }}>
      {text}
    </Text>
  );
};

const fonts: { [key: string]: TextStyle } = {
  '': {},
  medium12: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '500'
  },
  regular14: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400'
  },
  medium14: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500'
  },
  semi14: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '600'
  },
  bold14: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '700'
  },
  regular16: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400'
  },
  medium16: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500'
  },
  semi16: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600'
  },
  bold16: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700'
  },
  medium18: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '500'
  },
  semi18: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '600'
  },
  bold18: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '700'
  },
  medium20: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500'
  },
  semi20: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '600'
  },
  medium24: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '500'
  },
  semi24: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '600'
  },
  bold24: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '700'
  },
  semi28: {
    fontSize: 28,
    lineHeight: 46,
    fontWeight: '600'
  },
  bold28: {
    fontSize: 28,
    lineHeight: 46,
    fontWeight: '700'
  },
  black28: {
    fontSize: 28,
    lineHeight: 46,
    fontWeight: '900'
  }
};
