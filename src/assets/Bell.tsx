import Svg, { Path } from 'react-native-svg';
import { SvgPropsType } from '../interface';

export const Bell = ({ size = 24, color = 'black', onPress }: SvgPropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 34 34" onPress={onPress}>
      <Path fill={color} d="M17.016 10.067a1 1 0 0 0-.048-2l.048 2Zm-7.853 7.207h1v-.023l-1 .023Zm0 3.282.051.999a1 1 0 0 0 .95-.999h-1Zm0 4.378-.05.998.05.002v-1Zm4.524 1a1 1 0 0 0 0-2v2Zm2.305-16.867a1 1 0 1 0 2 0h-2Zm2-3.4a1 1 0 1 0-2 0h2Zm-.976 2.4a1 1 0 0 0-.048 2l.048-2Zm7.804 9.207-1-.023v.023h1Zm0 3.282h-1a1 1 0 0 0 .95.999l.05-.999Zm0 4.378v1c.017 0 .034 0 .051-.002l-.05-.998Zm-4.523-1a1 1 0 1 0 0 2v-2Zm-5.612 1.003a1 1 0 0 0-2-.007l2 .007Zm-.032 2.405.72-.693v-.002l-.72.695Zm4.675 0-.72-.694-.001.001.72.693Zm1.967-2.412a1 1 0 1 0-2 .007l2-.007Zm-7.611-.996a1 1 0 1 0 0 2v-2Zm6.613 2a1 1 0 0 0 0-2v2Zm-3.33-17.867a9.024 9.024 0 0 0-8.804 9.23l2-.046a7.024 7.024 0 0 1 6.853-7.184l-.048-2Zm-8.804 9.207v3.282h2v-3.282h-2Zm.95 2.284a3.191 3.191 0 0 0-3.03 3.187h2a1.19 1.19 0 0 1 1.131-1.19l-.102-1.997Zm-3.03 3.187a3.19 3.19 0 0 0 3.03 3.187l.101-1.997a1.192 1.192 0 0 1-1.131-1.19h-2Zm3.08 3.189h4.524v-2H9.163v2Zm8.829-16.867v-3.4h-2v3.4h2Zm-1.024 1a7.024 7.024 0 0 1 6.852 7.184l2 .046a9.024 9.024 0 0 0-8.804-9.23l-.048 2Zm6.852 7.207v3.282h2v-3.282h-2Zm.95 4.28a1.192 1.192 0 0 1 1.13 1.19h2a3.19 3.19 0 0 0-3.029-3.186l-.102 1.997Zm1.13 1.19a1.19 1.19 0 0 1-1.13 1.191l.101 1.997a3.192 3.192 0 0 0 3.03-3.187h-2Zm-1.08 1.19h-4.523v2h4.523v-2Zm-12.135.996a4.45 4.45 0 0 0 1.248 3.107l1.44-1.39a2.449 2.449 0 0 1-.688-1.71l-2-.007Zm1.247 3.105a4.241 4.241 0 0 0 3.058 1.303v-2c-.61 0-1.193-.249-1.616-.689l-1.442 1.386Zm3.058 1.303c1.155 0 2.26-.47 3.059-1.303l-1.442-1.386a2.241 2.241 0 0 1-1.617.689v2Zm3.057-1.302a4.45 4.45 0 0 0 1.248-3.106l-2 .007a2.45 2.45 0 0 1-.687 1.71l1.44 1.39Zm-6.363-2.102h6.613v-2h-6.613v2Z" />
    </Svg>
  )
}