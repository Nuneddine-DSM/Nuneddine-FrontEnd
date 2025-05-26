import Svg, { Path } from 'react-native-svg';
import { SvgPropsType } from '../interface';

export const Reset = ({ size = 24, color = 'black', onPress }: SvgPropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 30 30" onPress={onPress}>
      <Path fill={color} fillRule="evenodd" d="M5.944 12.574A9.375 9.375 0 0 1 21.63 8.369l2.379 2.378H20.03a.938.938 0 0 0 0 1.875h6.24a.937.937 0 0 0 .938-.937v-6.24a.938.938 0 0 0-1.875 0V9.42l-2.375-2.375a11.25 11.25 0 0 0-18.824 5.042.938.938 0 0 0 1.812.485m19.26 4.19a.939.939 0 0 0-1.148.663A9.374 9.374 0 0 1 8.372 21.63l-2.378-2.38h3.979a.938.938 0 0 0 0-1.875H3.73a.938.938 0 0 0-.937.938v6.24a.937.937 0 0 0 1.875 0v-3.975l2.375 2.375a11.25 11.25 0 0 0 18.824-5.044.937.937 0 0 0-.662-1.148Z" clipRule="evenodd" />
    </Svg>
  )
}