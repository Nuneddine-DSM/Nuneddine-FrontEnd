import Svg, { Path } from 'react-native-svg';
import { SvgPropsType } from '../interface';

export const Diopter = ({ size = 24, color = 'black', onPress }: SvgPropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" onPress={onPress}>
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 .857a11.143 11.143 0 1 0 0 22.286M16.474 1.8c.794.342 1.542.78 2.229 1.304a10.872 10.872 0 0 1 1.868 1.714m-4.097 17.469a10.512 10.512 0 0 0 2.229-1.303 10.869 10.869 0 0 0 1.868-1.715m2.28-9.839c.389 1.692.389 3.45 0 5.143" />
    </Svg>
  )
}