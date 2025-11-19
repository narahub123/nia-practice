import { create } from "zustand";
import type { ModalStore } from "../types";

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set(() => ({ isOpen })),
  onClose: () => set(() => ({ isOpen: false })),
  onOpen: () => set(() => ({ isOpen: true })),
}));
