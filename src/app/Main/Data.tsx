import {
  NavigationListDataType,
  BannerDataType,
  CategoryDataType,
  FooterDataType
} from "./interface"
import { Glasses, Lens } from "../../assets"
import Banner1 from "../../assets/Banner1.png"
import Banner2 from "../../assets/Banner2.png"
import Banner3 from "../../assets/Banner3.png"
import Banner4 from "../../assets/Banner4.png"

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
]

export const CategoryData: CategoryDataType[] = [
  {
    id: 1,
    name: "Glasses",
    text: "안경테",
    icon: <Glasses size={24} />,
  },
  {
    id: 2,
    name: "Lens",
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