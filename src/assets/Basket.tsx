import Svg, { Path } from 'react-native-svg';
import { SvgPropsType } from '../interface';

export const Basket = ({ size = 24, color = 'black', onPress }: SvgPropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 34 34" onPress={onPress}>
      <Path fill={color} d="M6.66 12.64a1 1 0 1 0-1.988.22l1.988-.22Zm.3 11.756-.994.11.994-.11Zm2.815 2.52v1-1Zm14.45 0v-1 1Zm2.816-2.52.994.11-.994-.11Zm2.286-11.536a1 1 0 1 0-1.988-.22l1.988.22ZM2.833 11.75a1 1 0 1 0 0 2v-2Zm28.333 2a1 1 0 1 0 0-2v2ZM6.19 12.303a1 1 0 0 0 1.788.894l-1.788-.894Zm4.62-4.773a1 1 0 0 0-1.79-.894l1.79.894Zm15.21 5.667a1 1 0 0 0 1.79-.894l-1.79.894Zm-1.044-6.561a1 1 0 1 0-1.788.894l1.788-.894ZM11.75 21.25a1 1 0 1 0 2 0h-2Zm2-2.834a1 1 0 0 0-2 0h2ZM16 21.25a1 1 0 1 0 2 0h-2Zm2-2.834a1 1 0 0 0-2 0h2Zm2.25 2.834a1 1 0 1 0 2 0h-2Zm2-2.834a1 1 0 0 0-2 0h2ZM4.672 12.86l1.294 11.646 1.988-.22L6.66 12.639l-1.988.221Zm1.294 11.647a3.833 3.833 0 0 0 3.808 3.41l.001-2a1.833 1.833 0 0 1-1.821-1.631l-1.988.22Zm3.809 3.41h14.45v-2H9.775v2Zm14.45 0a3.833 3.833 0 0 0 3.81-3.41l-1.988-.221a1.833 1.833 0 0 1-1.822 1.63v2Zm3.81-3.41 1.292-11.647-1.988-.22-1.292 11.646 1.988.22ZM2.833 13.75h28.333v-2H2.833v2Zm5.144-.553 2.834-5.667-1.79-.894-2.832 5.667 1.788.894Zm19.834-.894-2.834-5.667-1.788.894 2.833 5.667 1.789-.894ZM13.75 21.25v-2.834h-2v2.834h2Zm4.25 0v-2.834h-2v2.834h2Zm4.25 0v-2.834h-2v2.834h2Z" />
    </Svg>
  )
}