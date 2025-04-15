import Svg, { Path } from 'react-native-svg';
import { SvgPropsType } from '../interface';

export const Glasses = ({ size = 24, color = 'black', onPress }: SvgPropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" onPress={onPress}>
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M2.667 13.867a3.733 3.733 0 1 0 7.467 0 3.733 3.733 0 0 0-7.467 0Zm0 0V6.4m18.667 7.467a3.733 3.733 0 1 1-7.467 0 3.733 3.733 0 0 1 7.467 0Zm0 0V6.4m-7.467 7.467h-3.733" />
    </Svg>
  )
}