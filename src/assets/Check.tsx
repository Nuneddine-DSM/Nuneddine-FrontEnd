import Svg, { Path } from 'react-native-svg';
import { SvgPropsType } from '../interface';

export const Check = ({ size = 24, color = 'black', onPress }: SvgPropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 20 20" onPress={onPress}>
      <Path stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="m4.167 10.416 3.89 3.75 7.777-7.5" />
    </Svg>
  )
}