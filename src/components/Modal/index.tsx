import { createPortal } from "react-dom";
import {
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalSection,
  ModalTitle,
} from "./styled";
import ModalProps from "./type";
import { memo, useEffect, useState } from "react";

function Modal({ footer, children, title, onCloseModal }: ModalProps) {
  console.log('rerender Modal')
  return (
    <ModalSection>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalClose onClick={onCloseModal}>&#10006;</ModalClose>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContainer>
    </ModalSection>
  );
}

export default Modal;
