import Svg, { Path } from 'react-native-svg';
import { SvgPropsType } from '../interface';

export const Filter = ({ size = 24, color = 'black', onPress }: SvgPropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" onPress={onPress}>
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.44 8.04h2.06M3 8.04h12.33m2.06 2.04a2.05 2.05 0 0 0 2.06-2.04A2.05 2.05 0 0 0 17.39 6a2.05 2.05 0 0 0-2.06 2.04 2.05 2.05 0 0 0 2.06 2.04Zm-7.97 6.15h12.33m-18.5 0h2.06m2.05 2.04a2.05 2.05 0 0 0 2.06-2.04 2.05 2.05 0 0 0-2.06-2.04 2.05 2.05 0 0 0-2.06 2.04 2.05 2.05 0 0 0 2.06 2.04Z" />
    </Svg>
  )
}