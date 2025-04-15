import Svg, { Path } from 'react-native-svg';
import { SvgPropsType } from '../interface';

export const Lens = ({ size = 24, color = 'black', onPress }: SvgPropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" onPress={onPress}>
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" />
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M15.898 9.75a4.548 4.548 0 0 0-.243-.375m.703 3.75a4.508 4.508 0 0 1-3.233 3.233" />
    </Svg>
  )
}