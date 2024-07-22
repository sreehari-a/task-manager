import styled from "styled-components";
import { theme } from "../../common/theme";

export const ModalSection = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(256, 256, 256, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const ModalContainer = styled.div`
  width: 90%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: ${theme.boxShadow.shadow1};
`;

export const ModalClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: #e9e5ff;
  }
`;

export const ModalBody = styled.div`
  padding: 1rem;
`;

export const ModalTitle = styled.div`
  font-weight: 700;
`;
export const ModalDescription = styled.div`
  color: #6a6b76;
`;

export const ModalFooter = styled.div`
  padding: 1rem 1.5rem 1.5rem;
  display: flex;
  justify-content: flex-end;
`;
