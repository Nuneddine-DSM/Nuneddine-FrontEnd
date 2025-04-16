import Svg, { Path } from 'react-native-svg';
import { SvgPropsType } from '../interface';

export const Inster = ({ size = 24, color = 'black', onPress }: SvgPropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 16 16" onPress={onPress}>
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 1H5a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4Z" clipRule="evenodd" />
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" clipRule="evenodd" />
      <rect width="2" height="2" x="11" y="5" fill="#000" rx="1" transform="rotate(-90 11 5)" />
      <rect width="1" height="1" x="11.5" y="4.5" stroke={color} strokeLinecap="round" rx=".5" transform="rotate(-90 11.5 4.5)" />
    </Svg>
  )
}