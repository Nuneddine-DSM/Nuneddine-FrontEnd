import Naver from "../../../assets/Naver.png"
import Kakao from "../../../assets/Kakao.png"
import Toss from "../../../assets/Toss.png"
import Payco from "../../../assets/Payco.png"
import Samsung from "../../../assets/Samsung.png"
import { ReactNode } from "react"

export interface PaymentDataType {
  id?: number,
  title?: string,
  image?: ReactNode,
  height?: number
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