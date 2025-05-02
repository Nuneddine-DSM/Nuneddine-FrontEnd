import {
  NavigationListDataType,
  BannerDataType,
  CategoryDataType,
  FooterDataType,
  MainShoppingDataType
} from "./interface"
import { Glasses, Lens } from "../../assets"
import Banner1 from "../../assets/Banner1.png"
import Banner2 from "../../assets/Banner2.png"
import Banner3 from "../../assets/Banner3.png"
import Banner4 from "../../assets/Banner4.png"
import Banner5 from "../../assets/Banner5.png"
import Banner6 from "../../assets/Banner6.png"
import Banner7 from "../../assets/Banner7.png"

export const NavigationListData: NavigationListDataType[] = [
  {
    id: 1,
    name: "안경테 ALL",
    href: ""
  },
  {
    id: 2,
    name: "렌즈 ALL",
    href: ""
  },
  {
    id: 3,
    name: "얼굴형 추천",
    href: ""
  },
  {
    id: 4,
    name: "가이드",
    href: ""
  },
]

export const BannerData: BannerDataType[] = [
  {
    id: 1,
    image: Banner1,
    title: "세련된 투명함, 스타일을 입다",
    subTitle: "당신의 눈에 머무는 첫인상"
  },
  {
    id: 2,
    image: Banner2,
    title: "사소한 하루, 특별한 시선",
    subTitle: "어디서든 어울리는 데일리 프레임의 정석"
  },
  {
    id: 3,
    image: Banner3,
    title: "그때 그 시절, 그대로의 멋",
    subTitle: "90년대 감성, 지금 우리의 스타일로"
  },
  {
    id: 4,
    image: Banner4,
    title: "오늘의 무드, 맑음",
    subTitle: "꾸밈 없이도 완성되는 데일리 무드"
  },
  {
    id: 5,
    image: Banner5,
    title: "눈빛부터 달라지는 순간",
    subTitle: "당신의 본연을 더 빛나게 하는 데일리 렌즈"
  },
  {
    id: 6,
    image: Banner6,
    title: "나만의 컬러를 입다",
    subTitle: "예술적인 디테일, 렌즈 하나로 완성되는 무드"
  },
  {
    id: 7,
    image: Banner7,
    title: "차가운 듯 따뜻한 눈빛",
    subTitle: "그레이 톤의 깊이, 도회적인 무드의 완성"
  },
]

export const CategoryData: CategoryDataType[] = [
  {
    id: 1,
    text: "안경테",
    icon: <Glasses size={24} />,
  },
  {
    id: 2,
    text: "렌즈",
    icon: <Lens size={24} />,
  }
]

export const FooterData: FooterDataType[] = [
  {
    id: 1,
    title: "고객센터",
    info: "대덕소프트웨어마이스터고등학교 3-1",
  },
  {
    id: 2,
    title: "팀원",
    info: "임다영 | 홍서은 | 강태양 | 박예빈",
  },
  {
    id: 3,
    title: "사업자정보제공",
    info: "(주)소프트웨어공학",
  }
]

export const MainShoppingData: MainShoppingDataType[] = [
  {
    id: 1,
    name: "Popular",
    title: "유행템, 나도 찰떡 가능?",
    subTitle: "요즘 인기템 총정리! 고르기 전에 참고해요",
    content: [
      {
        shopId: 1,
        image: "https://m.hangle-eyewear.com/web/product/big/202411/aba216981789a6aba89faa4b7ffaff4c.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      },
      {
        shopId: 2,
        image: "https://sitem.ssgcdn.com/28/73/68/item/1000534687328_i1_750.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      },
      {
        shopId: 3,
        image: "https://image.rounz.com/_data/product/STYLEWORK/SLEEK-BACK-C2(47)_RZ/SLEEK-BACK-C2(47)_03_RZ.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      },
      {
        shopId: 4,
        image: "https://m.hangle-eyewear.com/web/product/big/202411/aba216981789a6aba89faa4b7ffaff4c.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      },
      {
        shopId: 5,
        image: "https://m.hangle-eyewear.com/web/product/big/202411/aba216981789a6aba89faa4b7ffaff4c.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      }
    ],
  },
  {
    id: 2,
    name: "Frames",
    title: "태만 봐도 느낌 온다",
    subTitle: "각진 태부터 둥근 태까지, 내 얼굴에 맞는 스타일 찾기",
    content: [
      {
        shopId: 1,
        image: "https://m.hangle-eyewear.com/web/product/big/202411/aba216981789a6aba89faa4b7ffaff4c.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      },
      {
        shopId: 2,
        image: "https://sitem.ssgcdn.com/28/73/68/item/1000534687328_i1_750.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      },
      {
        shopId: 3,
        image: "https://image.rounz.com/_data/product/STYLEWORK/SLEEK-BACK-C2(47)_RZ/SLEEK-BACK-C2(47)_03_RZ.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      },
      {
        shopId: 4,
        image: "https://m.hangle-eyewear.com/web/product/big/202411/aba216981789a6aba89faa4b7ffaff4c.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      },
      {
        shopId: 5,
        image: "https://m.hangle-eyewear.com/web/product/big/202411/aba216981789a6aba89faa4b7ffaff4c.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      }
    ],
  },
  {
    id: 3,
    name: "Hipster",
    title: "힙스터's Pick",
    subTitle: "스타일에 진심인 사람들의 추천템!",
    content: [
      {
        shopId: 1,
        image: "https://m.hangle-eyewear.com/web/product/big/202411/aba216981789a6aba89faa4b7ffaff4c.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      },
      {
        shopId: 2,
        image: "https://sitem.ssgcdn.com/28/73/68/item/1000534687328_i1_750.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      },
      {
        shopId: 3,
        image: "https://image.rounz.com/_data/product/STYLEWORK/SLEEK-BACK-C2(47)_RZ/SLEEK-BACK-C2(47)_03_RZ.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      },
      {
        shopId: 4,
        image: "https://m.hangle-eyewear.com/web/product/big/202411/aba216981789a6aba89faa4b7ffaff4c.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      },
      {
        shopId: 5,
        image: "https://m.hangle-eyewear.com/web/product/big/202411/aba216981789a6aba89faa4b7ffaff4c.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      }
    ],
  },
  {
    id: 4,
    name: "Hot",
    title: "지금 가장 핫한 브랜드",
    subTitle: "놓치면 아쉬운, 지금 제일 잘나가는 브랜드만!",
    content: [
      {
        shopId: 1,
        image: "https://m.hangle-eyewear.com/web/product/big/202411/aba216981789a6aba89faa4b7ffaff4c.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      },
      {
        shopId: 2,
        image: "https://sitem.ssgcdn.com/28/73/68/item/1000534687328_i1_750.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      },
      {
        shopId: 3,
        image: "https://image.rounz.com/_data/product/STYLEWORK/SLEEK-BACK-C2(47)_RZ/SLEEK-BACK-C2(47)_03_RZ.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      },
      {
        shopId: 4,
        image: "https://m.hangle-eyewear.com/web/product/big/202411/aba216981789a6aba89faa4b7ffaff4c.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      },
      {
        shopId: 5,
        image: "https://m.hangle-eyewear.com/web/product/big/202411/aba216981789a6aba89faa4b7ffaff4c.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      }
    ],
  },
  {
    id: 5,
    name: "Retro",
    title: "Classic in Retro Mood",
    subTitle: "빈티지 감성 좋아하는 당신을 위한 셀렉션",
    content: [
      {
        shopId: 1,
        image: "https://m.hangle-eyewear.com/web/product/big/202411/aba216981789a6aba89faa4b7ffaff4c.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      },
      {
        shopId: 2,
        image: "https://sitem.ssgcdn.com/28/73/68/item/1000534687328_i1_750.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      },
      {
        shopId: 3,
        image: "https://image.rounz.com/_data/product/STYLEWORK/SLEEK-BACK-C2(47)_RZ/SLEEK-BACK-C2(47)_03_RZ.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      },
      {
        shopId: 4,
        image: "https://m.hangle-eyewear.com/web/product/big/202411/aba216981789a6aba89faa4b7ffaff4c.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      },
      {
        shopId: 5,
        image: "https://m.hangle-eyewear.com/web/product/big/202411/aba216981789a6aba89faa4b7ffaff4c.jpg",
        title: "브랜드",
        describe: "베리스 레쥬렉션 선글라스 RESUR...",
        tag: "굵은태",
        price: 99000
      }
    ],
  },
]

export const FramesTag = [
  "둥근테",
  "각진테",
  "무테",
  "반무테",
  "굵은테",
  "얇은테",
  "투명테",
  "안단테"
]