import { ReactNode } from "react"
import { ImageSourcePropType } from "react-native"

export interface NavigationListDataType {
  id?: number,
  name?: string,
  href?: string
}

export interface BannerDataType {
  id?: number,
  image?: ImageSourcePropType,
  title?: string,
  subTitle?: string
}

export interface CategoryDataType {
  id?: number,
  name?: string,
  text?: string,
  icon?: ReactNode
}

export interface FooterDataType {
  id?: number,
  title?: string,
  info?: string
}

export interface MainShoppingDataType {
  id: number,
  name: string,
  title: string,
  subTitle: string,
  content: ShoppingContentType[]
}

export interface ShoppingContentType {
  image: string,
  title: string,
  describe: string,
  tag: string,
  price: number
}