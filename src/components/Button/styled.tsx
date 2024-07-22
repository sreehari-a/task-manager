import styled from "styled-components";

const Button = styled.button`
  height: 100%;
  padding: 10px 20px;
  line-height: 1.5rem;
  text-transform: uppercase;
  z-index: 0;
`;

export const NormalButton = styled(Button)<{
  radius: string;
  color: string;
  bgcolor: string;
  disabled: boolean;
  fontSize: string;
  border: string;
  padding: string;
}>`
  background-color: ${(props) => props.bgcolor};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  box-sizing: border-box;
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  cursor: pointer;
  font-weight: 600;
  text-align: center;
  text-decoration: none #6b7280 solid;
  text-decoration-thickness: auto;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  display: flex;
  font-size: ${(props) => props.fontSize};

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &:hover {
    scale: 1.05;
  }

  &:focus {
    box-shadow: none;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

export const ButtonText = styled.span`
  position: relative;
  z-index: 1;
`;

export const ButtonIcon = styled.span`
  position: relative;
  right: 4px;
`;

export const IButton = styled.button<{
  color: string;
  hoverColor: string;
  padding: string;
  margin: string;
  bgcolor: string;
  borderradius: string;
  border: string;
  fontSize: string;
}>`
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderradius};
  cursor: pointer;
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};

  background-color: ${(props) => props.bgcolor};
  &:disabled {
    opacity: 0.5;
  }
  &:not([disabled]):hover {
    background-color: ${(props) => props.hoverColor};
  }
  & > img {
    height: 1rem;
    width: 1rem;
  }
`;
