import Svg, { Path } from 'react-native-svg';
import { SvgPropsType } from '../interface';

export const User = ({ size = 24, color = 'black', onPress }: SvgPropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 40 40" onPress={onPress}>
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16" d="M26.666 15a6.667 6.667 0 1 1-13.333 0 6.667 6.667 0 0 1 13.333 0Z" clipRule="evenodd" />
      <Path stroke={color} strokeLinecap="round" strokeWidth="2.16" d="M8.333 31.667a22.136 22.136 0 0 1 23.333 0" />
    </Svg>
  )
}