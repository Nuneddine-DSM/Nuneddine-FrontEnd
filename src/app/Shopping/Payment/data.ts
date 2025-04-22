import Naver from "../../../assets/Naver.png"
import Kakao from "../../../assets/Kakao.png"
import Toss from "../../../assets/Toss.png"
import Payco from "../../../assets/Payco.png"
import Samsung from "../../../assets/Samsung.png"
import { ReactNode } from "react"

export interface PaymentDataType {
  id: number,
  title?: string,
  image?: ReactNode,
  height?: number
}

export interface OrderItemsType {
  id: number,
  name?: string,
  description?: string,
  count?: number,
  price?: string,
  image?: string
}

export const PaymentData: PaymentDataType[] = [
  {
    id: 1,
    title: "신용･체크카드",
  },
  {
    id: 2,
    image: Naver,
    height: 25
  },
  {
    id: 3,
    image: Kakao,
    height: 25
  },
  {
    id: 4,
    image: Toss,
    height: 20
  },
  {
    id: 5,
    image: Payco,
    height: 38
  },
  {
    id: 6,
    image: Samsung,
    height: 17
  },
]

export const OrderGlassesItems: OrderItemsType[] = [
  {
    id: 1,
    name: "브랜드",
    description: "[안경 이름] 암튼 이름 겁나 김 뭐 mm까지 나와있음..",
    count: 1,
    price: "39,000",
    image: "https://cf.product-image.s.zigzag.kr/original/d/2024/3/8/30075_202403080215060287_90209.jpeg?width=400&height=400&quality=80&format=webp"
  },
  {
    id: 2,
    name: "히히",
    description: "[안경 이름] 암튼 이름 겁나 김 뭐 mm까지 나와있음..",
    count: 1,
    price: "12,000",
    image: "https://haokan.co.kr/web/product/big/202409/741db85cf1aef13a67483f7159329dcb.jpg"
  },
  {
    id: 3,
    name: "하하",
    description: "[안경 이름] 암튼 이름 겁나 김 뭐 mm까지 나와있음..",
    count: 3,
    price: "45,000",
    image: "https://1746b291a6740af9.kinxzone.com/upload/images/product/92/92725/Product_1606147243462.jpg"
  },
]