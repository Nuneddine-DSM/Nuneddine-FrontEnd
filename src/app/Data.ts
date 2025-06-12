export const FrameShapeMap = {
  ROUND: '라운드',
  SQUARE: '스퀘어',
  BOSTON: '보스턴',
  OVAL: '오벌',
  CAT_EYE: '캣아이',
  WAYFARER: '웨이페어러',
  PILOT: '파일럿',
  OTHER: '기타',
} as const;

export const FrameMaterialMap = {
  FULL_FRAME: '풀프레임',
  HALF_RIM: '반무테',
  RIMLESS: '무테',
  UNDER_RIM: '언더림',
  WIRE_FRAME: '와이어 프레임',
  OTHER: '기타',
} as const;

export const LensColorMap = {
  BLACK: '블랙',
  BROWN: '브라운',
  BEIGE: '베이지',
  GRA: '그레이',
  GREEN: '그린',
  BLUE: '블루',
  PINK: '핑크',
  PURPLE: '퍼플',
  CLEAR: '투명',
  OTHER: '기타',
} as const;

export const LensColorCodeMap = {
  BLACK: '#000000',
  BROWN: '#BC6A12',
  BEIGE: '#F4E8DB',
  GRA: '#C4C1BE',
  GREEN: '#6DB827',
  BLUE: '#5590E9',
  PINK: '#FA69DF',
  PURPLE: '#CA4FE5',
  CLEAR: '#DDEBFF',
  OTHER: '#',
} as const;


export const LensDateTypeMap = {
  DATE: '원데이',
  WEEK: '일주일용',
  MONTH: '한달용',
  OTHER: '기타',
} as const;

export type FrameShapeType = keyof typeof FrameShapeMap;
export type FrameMaterialType = keyof typeof FrameMaterialMap;
export type LensColorType = keyof typeof LensColorMap;
export type LensDateType = keyof typeof LensDateTypeMap;

export const mapFrameShape = (shape: FrameShapeType): string => {
  switch (shape) {
    case "ROUND":
      return "둥근테";
    case "SQUARE":
      return "각진테";
    case "BOSTON":
      return "보스턴테";
    case "OVAL":
      return "타원형테";
    case "CAT_EYE":
      return "캣아이테";
    case "WAYFARER":
      return "웨이페어러테";
    case "PILOT":
      return "파일럿테";
    case "OTHER":
      return "기타";
    default:
      return "기타";
  }
};

export const mapDate = (date: LensDateType): string => {
  return LensDateTypeMap[date];
};