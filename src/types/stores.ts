export interface ModalStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onClose: () => void;
  onOpen: () => void;
}
