import { FrameShapeType } from "../app/Data";

export interface SvgPropsType {
  size?: number,
  color?: string,
  fill?: string,
  onPress?: () => void
}

export interface ArrowPropsType extends SvgPropsType {
  rotate?: 'top' | 'left' | 'right' | 'bottom';
}

export interface SignUpPropsType {
  control: any;
  onSelectSchool?: any;
}

export interface ProductType {
  shop_id: number,
  brand_name: string,
  glasses_name: string,
  description: string,
  price: number,
  frame_shape: FrameShapeType,
  image_urls: Array<string>,
  is_liked: boolean
}