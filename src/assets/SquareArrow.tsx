import Svg, { Path } from 'react-native-svg';
import { SvgPropsType } from '../interface';

export const SquareArrow = ({
  size = 24,
  color = 'black',
  onPress
}: SvgPropsType) => {
  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      onPress={onPress}>
      <Path
        d="M5 3C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3H5Z"
        stroke={color}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        d="M10 14L17 7M17 7H12M17 7V12"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
