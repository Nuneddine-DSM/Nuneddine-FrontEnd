import Svg, { Path } from 'react-native-svg';
import { SvgPropsType } from '../interface';

export const Minus = ({ size = 24, color = 'black', onPress }: SvgPropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 14 14" onPress={onPress}>
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M1.429 7h11.143" />
    </Svg>
  )
}