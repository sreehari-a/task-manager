import styled from "styled-components";
import { theme } from "../../common/theme";

export const DrawerHidden = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  z-index: ${(props) => (props.open ? "0" : "-1")};
  transition: ${(props) =>
    props.open
      ? "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1)"
      : "225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"};
`;

export const DrawerComponent = styled.div<{ open: boolean }>`
  top: 0;
  flex: 1 0 auto;
  height: 100%;
  display: flex;
  outline: 0;
  z-index: 1200;
  position: fixed;
  overflow-y: auto;
  flex-direction: column;

  background-color: ${theme.colors.WHITE};
  width: 300px;
  flex-shrink: 0;

  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  transform: ${(props) => (props.open ? "none" : "translateX(240px)")};
  box-shadow: ${(props) =>
    props.open
      ? "0 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12)"
      : "none"};
  flex-shrink: 0;
  transition: ${(props) =>
    !props.open ? "325ms cubic-bezier(0, 0, 0.2, 1) 0ms" : ""};
  flex-shrink: ${(props) => (!props.open ? "0" : "")};
  right: 0;
  left: auto;
`;

export const DrawerHeader = styled.div`
  display: flex;
  height: 3rem;
  justify-content: space-between;
  background-color: ${theme.colors.WHITE};
  padding: 0.75rem;
  align-items: center;
  box-shadow: ${theme.boxShadow.shadow1};
  font-weight: bold;
  font-size: 1rem;
`;

export const CloseIcon = styled.button`
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

export const DrawerFooter = styled.div`
position: absolute;
width: 100%;
bottom: 0;
box-shadow: ${theme.boxShadow.shadow1};
background-color: white;
z-index:1;
`
