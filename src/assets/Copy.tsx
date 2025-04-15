import Svg, { Path } from 'react-native-svg';
import { SvgPropsType } from '../interface';

export const Copy = ({ size = 24, color = 'black', onPress }: SvgPropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 40 40" onPress={onPress}>
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.077 8.333h7.18A5.775 5.775 0 0 1 27 14.14v7.053A5.775 5.775 0 0 1 21.257 27h-7.18a5.775 5.775 0 0 1-5.744-5.807v-7.051a5.775 5.775 0 0 1 5.744-5.809Z" clipRule="evenodd" />
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.111 31.666h7.95a7.693 7.693 0 0 0 7.605-7.778v-7.779" />
    </Svg>
  )
}