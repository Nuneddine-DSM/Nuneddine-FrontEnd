import { create } from 'zustand';
import { LensColorType, FrameShapeType, FrameMaterialType, LensDateType } from '../app/Data';

type FilterKey = 'frame_shape' | 'frame_material' | 'lens_color' | 'lens_date_type';

type FilterValueMap = {
  frame_shape: FrameShapeType;
  frame_material: FrameMaterialType;
  lens_color: LensColorType;
  lens_date_type: LensDateType;
};

interface FilterState {
  keyword: string;
  frame_shape: FrameShapeType[];
  frame_material: FrameMaterialType[];
  lens_color: LensColorType[];
  lens_date_type: LensDateType[];
  setKeyword: (keyword: string) => void;
  toggleFilterValue: <K extends FilterKey>(filterName: K, value: FilterValueMap[K]) => void;
  setSingleFilterValue: <K extends FilterKey>(filterName: K, value: FilterValueMap[K]) => void;
  resetFilters: () => void;
  
  productCount: number;
  setProductCount: (productCount: number) => void
}

export const useSearchStore = create<FilterState>((set) => ({
  keyword: '',
  frame_shape: [],
  frame_material: [],
  lens_color: [],
  lens_date_type: [],

  setKeyword: (keyword: string) => set({ keyword }),

  toggleFilterValue: (filterName, value) =>
    set((state) => {
      const current = state[filterName] as string[];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { [filterName]: updated };
    }),

  setSingleFilterValue: (filterName, value) =>
    set(() => ({
      [filterName]: [value],
  })),

  resetFilters: () =>
    set({
      keyword: '',
      frame_shape: [],
      frame_material: [],
      lens_color: [],
      lens_date_type: [],
    }),

    productCount: 0,
    setProductCount: (productCount: number) => set({ productCount }),
}));
