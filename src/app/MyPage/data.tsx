import { ReactNode } from "react"
import { Cart, Heart, Delivery, Diopter, Arrow } from "../../assets"
import { color } from "../../styles"

interface NavigationItemType {
  id: number,
  name: string,
  icon: ReactNode,
  href: string
}

const NavigationData: NavigationItemType[] = [
  {
    id: 1,
    name: "주문내역",
    icon: <Cart size={24} />,
    href: ""
  },
  {
    id: 2,
    name: "좋아요",
    icon: <Heart size={24} />,
    href: ""
  },
  {
    id: 3,
    name: "배송지 관리",
    icon: <Delivery size={24} />,
    href: ""
  },
  {
    id: 4,
    name: "렌즈 도수 설정",
    icon: <Diopter size={24} />,
    href: ""
  },
  {
    id: 5,
    name: "사용자 정보 수정",
    icon: <Arrow size={24} color={color.gray400} rotate="right" />,
    href: ""
  },
]

export default NavigationData
