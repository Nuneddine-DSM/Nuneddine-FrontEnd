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
  id: number,
  title: string,
  name: string,
  subTitle: string,
  tag: Array<string>,
  describe: string,
  recommend: string,
  alert: string,
  style: Array<string>
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
    title: "둥근",
    name: "Round",
    subTitle: "부드러운 곡선이 매력적인",
    tag: ["둥근매력", "부드러운 무드"],
    describe: "둥근 얼굴형은 전체적으로 부드럽고 귀여운 인상을 주고, 가로와 세로의 길이가 비슷하며, 턱선이 둥근 것이 특징이에요.",
    recommend: "라인이 위로 올라간 캣아이, 브로우라인\n스타일이 잘 어울려요. 이런 프레임이\n얼굴에 구조감을 더해주고\n더 세련된 인상을 만들어줘요.",
    alert: "반대로, 얼굴형과 비슷한 동그란 테는\n얼굴을 더 둥글어 보이게 할 수 있어요.",
    style: ["추천", "캣아이", "트렌드", "미니멀", "빈티지"]
  },
  {
    id: 2,
    title: "각진",
    name: "Square",
    subTitle: "선명한 윤곽이 돋보이는",
    tag: ["또렷한인상", "카리스마페이스"],
    describe: "각진 얼굴형은 전체적으로 또렷하고 강한 인상을 주며, 턱선이 뚜렷하고 사각형에 가까운 형태로, 선명한 윤곽이 돋보이는 것이 특징이에요.",
    recommend: "부드러운 곡선이 있는 라운드형이나\n오벌 프레임이 잘 어울려요.\n각진 윤곽을 자연스럽게 감싸주며\n인상을 부드럽게 만들어줘요.",
    alert: "반대로, 각진 얼굴에 각진 프레임은\n얼굴의 각을 더 강조해 보일 수 있어요.",
    style: ["추천", "오벌", "트렌드", "미니멀", "빈티지"]
  },
  {
    id: 3,
    title: "긴",
    name: "Long",
    subTitle: "시크한 분위기를 완성하는",
    tag: ["도시적인느낌", "세로미"],
    describe: "긴 얼굴형은 세로 길이가 길고 날렵한 느낌을 주며, 이마부터 턱까지의 라인이 길고 전체적으로 시원한 인상을 주는 것이 특징이에요.",
    recommend: "세로 길이를 시각적으로 줄여주는\n넓은 프레임이나 웨이페어러 스타일이 잘 어울려요. 전체적인 균형을 잡아주고 얼굴을 안정감 있게 보여줘요.",
    alert: "반대로, 세로로 긴 타원형 렌즈는 오히려 얼굴을 더 길어 보이게 할 수 있어요.",
    style: ["추천", "웨이페어러", "트렌드", "미니멀", "빈티지"]
  },
  {
    id: 4,
    title: "하트",
    name: "Heart",
    subTitle: "사랑스러운 이목구비를 살리는",
    tag: ["러블리포인트", "여리여리한인상"],
    describe: "하트형 얼굴은 이마가 넓고 턱이 뾰족해 사랑스럽고 귀여운 인상을 주며, 위쪽은 넓고 아래쪽은 좁은 얼굴형이 특징이에요.",
    recommend: "아래로 갈수록 넓어지는 프레임이나\n둥근 형태의 렌즈가 잘 어울려요.\n좁은 턱선을 보완해주고 전체적인\n인상을 부드럽게 만들어줘요.",
    alert: "반대로, 상단이 강조된 프레임은\n이마가 더 넓어 보일 수 있어요.",
    style: ["추천", "라운드", "트렌드", "미니멀", "빈티지"]
  },
  {
    id: 5,
    title: "마름모",
    name: "Diamond",
    subTitle: "날카로운 매력 속 부드러움 한 스푼",
    tag: ["세련된무드", "엣지있는스타일"],
    describe: "마름모 얼굴형은 광대가 도드라지고 이마와 턱이 좁은 형태로, 입체적이고 세련된 분위기를 주는 것이 특징이에요.",
    recommend: "얇은 테의 둥근 프레임이나\n위가 살짝 각진 형태가 잘 어울려요.\n도드라진 광대를 자연스럽게 잡아주고 얼굴에 조화를 더해줘요.",
    alert: "반대로, 너무 좁거나 과하게 각진 프레임은 광대를 더 도드라져 보일 수 있어요.",
    style: ["추천", "라운드", "트렌드", "미니멀", "빈티지"]
  },
  {
    id: 6,
    title: "타원형",
    name: "Oval",
    subTitle: "어떤 스타일도 자연스럽게 소화하는",
    tag: ["스타일만능", "완성형얼굴"],
    describe: "타원형 얼굴형은 전체적인 균형이 잘 잡혀 있고, 이마와 턱이 자연스럽게 이어져 어떤 스타일도 잘 어울리는 것이 특징이에요.",
    recommend: "대부분의 프레임이 잘 어울리지만,\n얼굴형의 균형을 살려주는 사각 프레임이나 브로우라인 스타일이 특히 좋아요. 전체적인 조화를 살릴 수 있어요.",
    alert: "단, 얼굴이 너무 길어 보일 수 있는\n얇고 긴 프레임은 주의해 주세요.",
    style: ["추천", "스퀘어", "트렌드", "미니멀", "빈티지"]
  },
];