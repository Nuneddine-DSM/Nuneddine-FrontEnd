import Svg, { Path } from 'react-native-svg';
import { SvgPropsType } from '../interface';

export const SquarePlus = ({
  size = 24,
  color = 'black',
  onPress
}: SvgPropsType) => {
  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 25 24"
      onPress={onPress}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16 12h-3.5m0 0H9m3.5 0V8.5m0 3.5v3.5m-9-6.1c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.54 3 7.66 3 9.9 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748c.436.856.436 1.976.436 4.216v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C18.46 21 17.34 21 15.1 21H9.9c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3.5 17.96 3.5 16.84 3.5 14.6V9.4Z"
      />
    </Svg>
  );
};
