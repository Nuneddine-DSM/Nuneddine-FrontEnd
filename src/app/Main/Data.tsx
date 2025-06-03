import {
  NavigationListDataType,
  BannerDataType,
  CategoryDataType,
  FooterDataType,
} from "./interface"
import { Glasses, Lens } from "../../assets"
import Banner1 from "../../assets/Banner1.png"
import Banner2 from "../../assets/Banner2.png"
import Banner3 from "../../assets/Banner3.png"
import Banner4 from "../../assets/Banner4.png"
import Banner5 from "../../assets/Banner5.png"
import Banner6 from "../../assets/Banner6.png"
import Banner7 from "../../assets/Banner7.png"
import GlassesTabIcon from "../../assets/GlassesTabIcon.png"
import LensTabIcon from "../../assets/LensTabIcon.png"
import FaceTabIcon from "../../assets/FaceTabIcon.png"
import TipTabIcon from "../../assets/TipTabIcon.png"

export const NavigationListData: NavigationListDataType[] = [
  {
    id: 1,
    name: "안경테 ALL",
    href: "SearchProduct",
    image: GlassesTabIcon,
    imageHeight: 35,
    imageWidth: 62
  },
  {
    id: 2,
    name: "렌즈 ALL",
    href: "SearchProduct",
    image: LensTabIcon,
    imageHeight: 17,
    imageWidth: 53
  },
  {
    id: 3,
    name: "얼굴형 추천",
    href: "FaceFit",
    image: FaceTabIcon,
    imageHeight: 53,
    imageWidth: 57
  },
  {
    id: 4,
    name: "가이드",
    href: "Guide",
    image: TipTabIcon,
    imageHeight: 36,
    imageWidth: 49
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
    icon: (selected) => <Glasses size={24} color={selected ? "black" : "gray"} />,
  },
  {
    id: 2,
    text: "렌즈",
    icon: (selected) => <Lens size={24} color={selected ? "black" : "gray"} />
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