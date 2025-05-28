import { ReactNode } from 'react';
import { Cart, Heart, Delivery, Diopter, Arrow } from '../../assets';
import { color } from '../../styles';

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
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  type: 'Glasses' | 'Lens';
  option: OptionType[];
};

export type OptionType = {
  number: number;
  lensType: string;
};

export const MyOrderData: MyOrderDataType[] = [
  {
    date: '2025.3.15',
    item: [
      {
        id: 1,
        name: '브랜드',
        description: '[안경 이름] 암튼 이름 겁나 김 뭐 mm 까지 나와있음',
        price: '39,000',
        image:
          'https://i.namu.wiki/i/8hxgVnq4W5zCE6FHyM9FhjBSPZ6K3MAxfKsOO5Vrzj8O121kWBnchyK7Ux6caItuyy0K2odSOD-GJhAvzfn5ZA.webp',
        type: 'Glasses',
        option: [{ number: 1, lensType: '' }]
      },
      {
        id: 2,
        name: '브랜드',
        description: '[안경 이름] 암튼 이름 겁나',
        price: '39,000',
        image:
          'data:image/jpeg;base64,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',
        type: 'Lens',
        option: [{ number: 1, lensType: '-1.00' }]
      }
    ]
  },
  {
    date: '2025.3.15',
    item: [
      {
        id: 1,
        name: '브랜드',
        description: '[안경 이름] 암튼 이름 겁나 김 뭐 mm 까지 나와있음',
        price: '39,000',
        image:
          'https://i.namu.wiki/i/8hxgVnq4W5zCE6FHyM9FhjBSPZ6K3MAxfKsOO5Vrzj8O121kWBnchyK7Ux6caItuyy0K2odSOD-GJhAvzfn5ZA.webp',
        type: 'Glasses',
        option: [{ number: 1, lensType: '' }]
      }
    ]
  }
];

interface DeliveryDataType {
  id: number;
  nickName: string;
  userName: string;
  phone: string;
  address: string;
}

export const DeliveryData: DeliveryDataType[] = [
  {
    id: 1,
    nickName: '제 2의 집',
    userName: '박예빈',
    phone: '010-2250-6815',
    address:
      '대전광역시 유성구 가정북로 76 (장동, 대덕소프트웨어마이스터고등학교), 우정관 택배함(기숙사)'
  },
  {
    id: 2,
    nickName: '제 2의 집',
    userName: '박예빈',
    phone: '010-2250-6815',
    address:
      '대전광역시 유성구 가정북로 76 (장동, 대덕소프트웨어마이스터고등학교), 우정관 택배함(기숙사)'
  },
  {
    id: 3,
    nickName: '제 2의 집',
    userName: '박예빈',
    phone: '010-2250-6815',
    address:
      '대전광역시 유성구 가정북로 76 (장동, 대덕소프트웨어마이스터고등학교), 우정관 택배함(기숙사)'
  }
];
