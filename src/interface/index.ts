export interface SvgPropsType {
  size?: number,
  color?: string,
  onPress?: () => void
}

export interface ArrowPropsType extends SvgPropsType {
  rotate?: 'top' | 'left' | 'right' | 'bottom';
}