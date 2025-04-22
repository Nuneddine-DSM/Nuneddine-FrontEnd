import Svg, { Path } from 'react-native-svg';
import { SvgPropsType } from '../interface';

export const Cart = ({ size = 24, color = 'black', onPress }: SvgPropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" onPress={onPress}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20.88 12.857H6.857L5.143 4.285h17.143a.857.857 0 0 1 .84 1.012l-1.406 6.857a.84.84 0 0 1-.84.703v0ZM5.143 4.286l-.72-2.743a.857.857 0 0 0-.84-.686H.857m6 12 .72 3.6a.857.857 0 0 0 .84.686h10.44M18 23.144a.857.857 0 1 1 0-1.714.857.857 0 0 1 0 1.714Zm-8.572 0a.857.857 0 1 1 0-1.714.857.857 0 0 1 0 1.714Z"
      />
    </Svg>
  )
}