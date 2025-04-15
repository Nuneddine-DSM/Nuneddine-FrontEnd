import Svg, { Path } from 'react-native-svg';
import { SvgPropsType } from '../interface';

export const Search = ({ size = 24, color = 'black', onPress }: SvgPropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 28 28" onPress={onPress}>
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.833 13.003A7.168 7.168 0 1 1 20.169 13a7.168 7.168 0 0 1-14.336.002Z" clipRule="evenodd" />
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m18.375 18.375 3.5 3.5" />
    </Svg>
  )
}