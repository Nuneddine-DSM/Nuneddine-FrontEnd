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