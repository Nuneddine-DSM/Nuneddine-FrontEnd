import Svg, { Path } from 'react-native-svg';
import { SvgPropsType } from '../interface';

export const Message = ({ size = 24, color = 'black', onPress }: SvgPropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 16 17" onPress={onPress}>
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14.004a6.764 6.764 0 0 0 7-6.5 6.764 6.764 0 0 0-7-6.5 6.764 6.764 0 0 0-7 6.5 6.316 6.316 0 0 0 2.527 5l-.027 3 3-1.65c.494.1.996.15 1.5.15Z" clipRule="evenodd" />
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.5 6.004 9 8.504l-2-2-2.5 2.5" />
    </Svg>
  )
}