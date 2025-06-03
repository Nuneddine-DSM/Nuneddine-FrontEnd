import {
  FrameShapeType,
  FrameMaterialType,
  LensColorType,
  LensDateType
} from '../app/Data';

export interface SvgPropsType {
  size?: number;
  color?: string;
  fill?: string;
  onPress?: () => void;
}

export interface ArrowPropsType extends SvgPropsType {
  rotate?: 'top' | 'left' | 'right' | 'bottom';
}

export interface SignUpPropsType {
  control: any;
  onSelectSchool?: any;
}

export interface ProductType {
  shop_id: number;
  brand_name: string;
  glasses_name: string;
  description: string;
  price: number;
  frame_shape: FrameShapeType;
  image_urls: Array<string>;
  is_liked: boolean;
}

export interface CartItemType {
  cart_id: number;
  shop_id: number;
  brand_name: string;
  image_urls: Array<string>;
  date_type: LensDateType;
  glass_name: string;
  lens_power: number;
  price: number;
  count: number;
}

export interface CartResponseType {
  carts_count: number;
  cart_list: CartItemType[];
  total_price: number;
}

export interface GuideItemType {
  guide_id: number;
  title: string;
  image_url: string;
}

export interface TipItemType {
  question: string,
  answer: string
}

export interface FilterRequest {
  keyword?: string;
  lens_color?: Array<LensColorType>;
  lens_date_type?: Array<LensDateType>;
  frame_shape?: Array<FrameShapeType>;
  frame_material?: Array<FrameMaterialType>;
}

export interface BottomButtonsProps {
  hearted: boolean;
  onHeartPress: () => void;
  buttonText: string;
  onButtonPress: () => void;
}

export interface AddressResponse {
  id: number,
  address: string,
  detail_address: string,
  delivery_address_name: string,
  post_code: string,
  receiver: string,
  phone_number: string
}

export interface ShopType {
  shop_id: number;
  brand_name: string;
  glasses_name: string;
  description_image: string;
  price: number;
  image_urls: string[];
  is_liked: boolean;
  shop_type: string;
};

