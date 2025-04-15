import Svg, { Path } from 'react-native-svg';
import { SvgPropsType } from '../interface';

export const Browser = ({ size = 24, color = 'black', onPress }: SvgPropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 40 40" onPress={onPress}>
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 31.666c6.443 0 11.666-5.223 11.666-11.666 0-6.444-5.223-11.667-11.666-11.667-6.444 0-11.667 5.223-11.667 11.667 0 6.443 5.223 11.666 11.667 11.666Z" clipRule="evenodd" />
      <Path stroke={color} strokeLinecap="round" strokeWidth="2" d="M9.138 24.268c10.861-6.213 16.695-2.323 21.723 0" />
    </Svg>
  )
}