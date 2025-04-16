export interface SvgPropsType {
  size?: number,
  color?: string,
  fill?: string,
  onPress?: () => void
}

export interface ArrowPropsType extends SvgPropsType {
  rotate?: 'top' | 'left' | 'right' | 'bottom';
}

export interface SignUpPropsType {
  control: any;
  onSelectSchool?: any;
}