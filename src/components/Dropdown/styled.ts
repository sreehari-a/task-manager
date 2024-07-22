import styled from "styled-components";
import { theme } from "../../common/theme";

export const DropdownContainer = styled.div<{ fullWidth?: boolean }>`
  position: relative;
  display: block;
  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};
  padding-bottom: 0.5rem;
`;

export const DropdownButton = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  border: 1px solid #818080;
  cursor: pointer;
  display: flex;
`;

export const ArrowSection = styled.div`
  align-self: center;
  position: absolute;
  right: 0.5rem;
`;

export const DropdownContent = styled.div<{ fullWidth?: boolean }>`
  font-size: 13px;
  position: absolute;
  z-index: 1;
  background-color: ${theme.colors.WHITE};
  border: 1px solid #818080;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  width: ${(props) => (props.fullWidth ? "100%" : "max-content")};
  border-top: none;
`;
export const Option = styled.div`
  display: block;
  transition: 0.1s;
`;
