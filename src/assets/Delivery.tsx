import Svg, { Path } from 'react-native-svg';
import { SvgPropsType } from '../interface';

export const Delivery = ({ size = 24, color = 'black', onPress }: SvgPropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" onPress={onPress}>
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 16.286a4.286 4.286 0 1 0 0-8.571 4.286 4.286 0 0 0 0 8.571Zm-7.32 6.685a8.572 8.572 0 0 1 14.64 0" />
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M23.143 11.897a1.714 1.714 0 0 0-.549-1.268L12 .857 1.406 10.63a1.713 1.713 0 0 0-.549 1.268v9.532a1.714 1.714 0 0 0 1.714 1.714h18.857a1.714 1.714 0 0 0 1.715-1.714v-9.532Z" />
    </Svg>
  )
}