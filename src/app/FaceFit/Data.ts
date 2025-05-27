export interface RecommendDataType {
  category: string;
  content: ShoppingContentType[];
}

export interface ShoppingContentType {
  shopId: number;
  image: string;
  title: string;
  describe: string;
  tag: string;
  price: number;
}

export interface FaceDataType {
  id: number;
  title: string;
}

export interface FaceCardType {
  id: number;
  name: string;
  subTitle: string;
  title: string;
  tag: Array<string>;
  describe: string;
}

export const RecommendData: RecommendDataType[] = [
  {
    category: '추천',
    content: [
      {
        shopId: 1,
        image:
          'https://m.hangle-eyewear.com/web/product/big/202411/aba216981789a6aba89faa4b7ffaff4c.jpg',
        title: '브랜드',
        describe: '베리스 레쥬렉션 선글라스 RESUR...',
        tag: '굵은태',
        price: 99000
      },
      {
        shopId: 2,
        image:
          'https://sitem.ssgcdn.com/28/73/68/item/1000534687328_i1_750.jpg',
        title: '브랜드',
        describe: '베리스 레쥬렉션 선글라스 RESUR...',
        tag: '굵은태',
        price: 99000
      },
      {
        shopId: 3,
        image:
          'https://image.rounz.com/_data/product/STYLEWORK/SLEEK-BACK-C2(47)_RZ/SLEEK-BACK-C2(47)_03_RZ.jpg',
        title: '브랜드',
        describe: '베리스 레쥬렉션 선글라스 RESUR...',
        tag: '굵은태',
        price: 99000
      }
    ]
  },
  {
    category: '각진 안경테',
    content: [
      {
        shopId: 4,
        image:
          'https://m.hangle-eyewear.com/web/product/big/202411/aba216981789a6aba89faa4b7ffaff4c.jpg',
        title: '브랜드',
        describe: '베리스 레쥬렉션 선글라스 RESUR...',
        tag: '굵은태',
        price: 99000
      },
      {
        shopId: 5,
        image:
          'https://sitem.ssgcdn.com/28/73/68/item/1000534687328_i1_750.jpg',
        title: '브랜드',
        describe: '베리스 레쥬렉션 선글라스 RESUR...',
        tag: '굵은태',
        price: 99000
      },
      {
        shopId: 6,
        image:
          'https://image.rounz.com/_data/product/STYLEWORK/SLEEK-BACK-C2(47)_RZ/SLEEK-BACK-C2(47)_03_RZ.jpg',
        title: '브랜드',
        describe: '베리스 레쥬렉션 선글라스 RESUR...',
        tag: '굵은태',
        price: 99000
      }
    ]
  },
  {
    category: '트렌드',
    content: [
      {
        shopId: 7,
        image:
          'https://m.hangle-eyewear.com/web/product/big/202411/aba216981789a6aba89faa4b7ffaff4c.jpg',
        title: '브랜드',
        describe: '베리스 레쥬렉션 선글라스 RESUR...',
        tag: '굵은태',
        price: 99000
      },
      {
        shopId: 8,
        image:
          'https://sitem.ssgcdn.com/28/73/68/item/1000534687328_i1_750.jpg',
        title: '브랜드',
        describe: '베리스 레쥬렉션 선글라스 RESUR...',
        tag: '굵은태',
        price: 99000
      },
      {
        shopId: 9,
        image:
          'https://image.rounz.com/_data/product/STYLEWORK/SLEEK-BACK-C2(47)_RZ/SLEEK-BACK-C2(47)_03_RZ.jpg',
        title: '브랜드',
        describe: '베리스 레쥬렉션 선글라스 RESUR...',
        tag: '굵은태',
        price: 99000
      }
    ]
  },
  {
    category: '미니멀',
    content: [
      {
        shopId: 10,
        image:
          'https://m.hangle-eyewear.com/web/product/big/202411/aba216981789a6aba89faa4b7ffaff4c.jpg',
        title: '브랜드',
        describe: '베리스 레쥬렉션 선글라스 RESUR...',
        tag: '굵은태',
        price: 99000
      },
      {
        shopId: 11,
        image:
          'https://sitem.ssgcdn.com/28/73/68/item/1000534687328_i1_750.jpg',
        title: '브랜드',
        describe: '베리스 레쥬렉션 선글라스 RESUR...',
        tag: '굵은태',
        price: 99000
      },
      {
        shopId: 12,
        image:
          'https://image.rounz.com/_data/product/STYLEWORK/SLEEK-BACK-C2(47)_RZ/SLEEK-BACK-C2(47)_03_RZ.jpg',
        title: '브랜드',
        describe: '베리스 레쥬렉션 선글라스 RESUR...',
        tag: '굵은태',
        price: 99000
      }
    ]
  },
  {
    category: '빈티지',
    content: [
      {
        shopId: 13,
        image:
          'https://m.hangle-eyewear.com/web/product/big/202411/aba216981789a6aba89faa4b7ffaff4c.jpg',
        title: '브랜드',
        describe: '베리스 레쥬렉션 선글라스 RESUR...',
        tag: '굵은태',
        price: 99000
      },
      {
        shopId: 14,
        image:
          'https://sitem.ssgcdn.com/28/73/68/item/1000534687328_i1_750.jpg',
        title: '브랜드',
        describe: '베리스 레쥬렉션 선글라스 RESUR...',
        tag: '굵은태',
        price: 99000
      },
      {
        shopId: 15,
        image:
          'https://image.rounz.com/_data/product/STYLEWORK/SLEEK-BACK-C2(47)_RZ/SLEEK-BACK-C2(47)_03_RZ.jpg',
        title: '브랜드',
        describe: '베리스 레쥬렉션 선글라스 RESUR...',
        tag: '굵은태',
        price: 99000
      }
    ]
  }
];

export const FaceData: FaceDataType[] = [
  {
    id: 1,
    title: '둥근'
  },
  {
    id: 2,
    title: '둥근'
  },
  {
    id: 3,
    title: '둥근'
  },
  {
    id: 4,
    title: '둥근'
  },
  {
    id: 5,
    title: '둥근'
  },
  {
    id: 6,
    title: '둥근'
  }
];

export const FaceCardData: FaceCardType[] = [
  {
    id: 1,
    name: 'round',
    subTitle: '부드러운 곡선이 매력적인',
    title: '둥근(Round) 얼굴형',
    tag: ['둥근매력', '부드러운 무드'],
    describe:
      '둥근 얼굴형은 전체적으로 부드럽고 귀여운 인상을 주고, 가로와 세로의 길이가 비슷하며, 턱선이 둥근 것이 특징이에요.'
  },
  {
    id: 2,
    name: 'round',
    subTitle: '부드러운 곡선이 매력적인',
    title: '둥근(Round) 얼굴형',
    tag: ['둥근매력', '부드러운 무드'],
    describe:
      '둥근 얼굴형은 전체적으로 부드럽고 귀여운 인상을 주고, 가로와 세로의 길이가 비슷하며, 턱선이 둥근 것이 특징이에요.'
  },
  {
    id: 3,
    name: 'round',
    subTitle: '부드러운 곡선이 매력적인',
    title: '둥근(Round) 얼굴형',
    tag: ['둥근매력', '부드러운 무드'],
    describe:
      '둥근 얼굴형은 전체적으로 부드럽고 귀여운 인상을 주고, 가로와 세로의 길이가 비슷하며, 턱선이 둥근 것이 특징이에요.'
  },
  {
    id: 4,
    name: 'round',
    subTitle: '부드러운 곡선이 매력적인',
    title: '둥근(Round) 얼굴형',
    tag: ['둥근매력', '부드러운 무드'],
    describe:
      '둥근 얼굴형은 전체적으로 부드럽고 귀여운 인상을 주고, 가로와 세로의 길이가 비슷하며, 턱선이 둥근 것이 특징이에요.'
  },
  {
    id: 5,
    name: 'round',
    subTitle: '부드러운 곡선이 매력적인',
    title: '둥근(Round) 얼굴형',
    tag: ['둥근매력', '부드러운 무드'],
    describe:
      '둥근 얼굴형은 전체적으로 부드럽고 귀여운 인상을 주고, 가로와 세로의 길이가 비슷하며, 턱선이 둥근 것이 특징이에요.'
  },
  {
    id: 6,
    name: 'round',
    subTitle: '부드러운 곡선이 매력적인',
    title: '둥근(Round) 얼굴형',
    tag: ['둥근매력', '부드러운 무드'],
    describe:
      '둥근 얼굴형은 전체적으로 부드럽고 귀여운 인상을 주고, 가로와 세로의 길이가 비슷하며, 턱선이 둥근 것이 특징이에요.'
  }
];
