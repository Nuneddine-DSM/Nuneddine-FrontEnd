import { ReactNode } from 'react';
import { Cart, Heart, Delivery, Diopter, Arrow } from '../../assets';
import { color } from '../../styles';
import { FrameShapeType } from '../Data';

interface NavigationItemType {
  id: number;
  name: string;
  icon: ReactNode;
  href: string;
}

export const NavigationData: NavigationItemType[] = [
  {
    id: 1,
    name: '주문내역',
    icon: <Cart size={24} />,
    href: 'OrderDetails'
  },
  {
    id: 2,
    name: '좋아요',
    icon: <Heart size={24} />,
    href: 'Like'
  },
  {
    id: 3,
    name: '배송지 관리',
    icon: <Delivery size={24} />,
    href: 'DeliveryDetail'
  },
  {
    id: 4,
    name: '렌즈 도수 설정',
    icon: <Diopter size={24} />,
    href: 'Frequency'
  },
  {
    id: 5,
    name: '사용자 정보 수정',
    icon: <Arrow size={24} color={color.gray400} rotate="right" />,
    href: 'EditProfile'
  }
];

export interface MyOrderDataType {
  date: string;
  item: OrderDataItemType[];
}

export type OrderDataItemType = {
  cart_id: number,
  shop_id: number,
  brand_name: string,
  image_urls: Array<string>,
  frame_shape: FrameShapeType,
  glass_name: string,
  lens_power: number,
  price: number,
  count: number
};
