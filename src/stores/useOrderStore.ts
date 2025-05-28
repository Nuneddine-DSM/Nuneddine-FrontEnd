import { create } from 'zustand';

interface OrderState {
  lensPower: number;
  optionCount: number;
  setLensPower: (power: number) => void;
  setCount: (count: number) => void;
  reset: () => void;
}

export const useOrderStore = create<OrderState>((set) => ({
  lensPower: 0,
  optionCount: 1,
  setLensPower: (power) => set({ lensPower: power }),
  setCount: (optionCount) => set({ optionCount }),
  reset: () => set({ lensPower: 0, optionCount: 1 }),
}));