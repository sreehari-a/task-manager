import { ReactNode } from "react";

export type ConfirmModalProps = {
    modalTitle: string;
    modalBody?: ReactNode;
    onCloseModal: () => void;
    primaryButtonText: string;
    primaryButtonClick: () => void;
    secondaryButtonText: string;
    secondaryButtonClick: () => void;
  };