import Svg, { Path } from 'react-native-svg';
import { SvgPropsType } from '../interface';

export const Heart = ({ size = 24, color = 'black', fill = 'none', onPress }: SvgPropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 20 20" onPress={onPress}>
      <Path
        fill={fill !== 'none' ? fill : 'none'}
        stroke={fill === 'none' ? color : 'none'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m10.006 17.444-7.57-6.857c-4.114-4.115 1.934-12.014 7.57-5.623 5.637-6.391 11.657 1.536 7.57 5.623l-7.57 6.857Z"
      />
    </Svg>
  )
}