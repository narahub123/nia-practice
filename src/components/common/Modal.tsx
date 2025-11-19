import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";
import { LuX } from "react-icons/lu";
import { useModalStore } from "../../stores";

interface ModalRoot {
  className?: string;
  children: ReactNode;
}

const ModalRoot = ({ className: _className, children }: ModalRoot) => {
  const { isOpen } = useModalStore();
  const className = twMerge("fixed inset-0 z-10", _className);

  if (!isOpen) return;
  return <div className={className}>{children}</div>;
};

interface ModalOverlay {
  className?: string;
  isClickOutsideOn?: boolean;
}

const ModalOverlay = ({
  className: _className,
  isClickOutsideOn = true,
}: ModalOverlay) => {
  const { onClose } = useModalStore();
  const className = twMerge("fixed inset-0 bg-black/50 z-10", _className);

  const handleClick = () => {
    if (isClickOutsideOn) {
      onClose();
    }
  };

  return <div className={className} onClick={handleClick} />;
};

interface ModalContent {
  className?: string;
  children: ReactNode;
}

const ModalContent = ({ className: _className, children }: ModalContent) => {
  const className = twMerge(
    "absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 bg-white w-[80%] h-[80%] z-10 rounded-2xl flex flex-col",
    _className
  );
  return <div className={className}>{children}</div>;
};

interface ModalCloseButton {
  className?: string;
  onClick?: () => void;
}

const ModalCloseButton = ({
  className: _className,
  onClick,
}: ModalCloseButton) => {
  const { onClose } = useModalStore();
  const className = twMerge(
    "absolute right-2 top-2 z-10 text-black p-3 rounded-full hover:bg-gray-100",
    _className
  );

  const handleClick = () => {
    onClick && onClick();

    onClose();
  };

  return (
    <Button className={className} onClick={handleClick}>
      <LuX />
    </Button>
  );
};

interface ModalHeader {
  className?: string;
  children: ReactNode;
}

const ModalHeader = ({ className: _className, children }: ModalHeader) => {
  const className = twMerge("mt-4 mx-4 border-b border-gray-50", _className);
  return <div className={className}>{children}</div>;
};

interface ModalBody {
  className?: string;
  children: ReactNode;
}

const ModalBody = ({ className: _className, children }: ModalBody) => {
  const className = twMerge("flex-1 mx-4 overflow-auto", _className);
  return <div className={className}>{children}</div>;
};

interface ModalFooter {
  className?: string;
  children: ReactNode;
}

const ModalFooter = ({ className: _className, children }: ModalFooter) => {
  const className = twMerge("mb-4 mx-4 border-t border-gray-50", _className);
  return <div className={className}>{children}</div>;
};

const Modal = Object.assign(ModalRoot, {
  Overlay: ModalOverlay,
  Content: ModalContent,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
  CloesButton: ModalCloseButton,
});

export default Modal;
