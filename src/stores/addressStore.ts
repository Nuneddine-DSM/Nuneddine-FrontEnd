import { create } from 'zustand';

interface AddressStore {
  selectedAddressId: number | null;
  setSelectedAddressId: (id: number) => void;
}

export const useAddressStore = create<AddressStore>((set) => ({
  selectedAddressId: null,
  setSelectedAddressId: (id) => set({ selectedAddressId: id }),
}));