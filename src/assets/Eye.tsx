import Svg, { Path } from 'react-native-svg';
import { SvgPropsType } from '../interface';

export const Eye = ({ size = 24, color = 'black', onPress }: SvgPropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 36 37" onPress={onPress}>
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M28.5 21.071c0 3.55-4.701 6.43-10.5 6.43S7.5 24.62 7.5 21.07s4.701-6.427 10.5-6.427 10.5 2.877 10.5 6.427Z" clipRule="evenodd" />
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.625 21.071A2.625 2.625 0 1 1 18 18.501a2.598 2.598 0 0 1 2.625 2.57v0Z" clipRule="evenodd" />
      <Path fill={color} d="M17.25 14.643a.75.75 0 0 0 1.5 0h-1.5Zm1.5-5.143a.75.75 0 0 0-1.5 0h1.5Zm9.106 2.912a.75.75 0 1 0-1.337-.682l1.337.682Zm-3.492 3.545a.75.75 0 1 0 1.336.682l-1.336-.682ZM9.48 11.73a.75.75 0 1 0-1.337.682l1.337-.682Zm.819 4.909a.75.75 0 1 0 1.336-.682l-1.336.682Zm8.45-1.995V9.5h-1.5v5.143h1.5Zm7.77-2.914-2.156 4.227 1.336.682 2.156-4.227-1.337-.682Zm-18.376.682 2.156 4.227 1.336-.682L9.48 11.73l-1.337.682Z" />
    </Svg>
  )
}