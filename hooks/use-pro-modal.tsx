import { create } from "zustand";

type TUseProModal = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useProMOdal = create<TUseProModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
