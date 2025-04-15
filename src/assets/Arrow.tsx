import Svg, { Path } from 'react-native-svg';
import { ArrowPropsType } from '../interface';

const rotationAngles: { [key: string]: string } = {
  right: '180deg',
  top: '90deg',
  bottom: '-90deg',
  left: '0deg',
};

export const Arrow = ({
  size = 24,
  color = 'black',
  rotate = 'left',
  onPress
}: ArrowPropsType) => {
  const rotation = rotationAngles[rotate] || rotationAngles['left'];

  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 34 34" style={{transform: [{rotate: rotation}]}} onPress={onPress}>
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21.25 9.917 14.167 17l7.083 7.084" />
    </Svg>
  )
}