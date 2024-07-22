import styled from "styled-components";
import { theme } from "../../common/theme";

export const Header = styled.div`
  display: flex;
  height: 3rem;
  justify-content: space-between;
  background-color: ${theme.colors.WHITE};
  padding: 0.75rem;
  align-items: center;
  box-shadow: ${theme.boxShadow.shadow1}
`;

export const HeaderText = styled.div`
  font-size: 1.5rem;
  @media (max-width: 385px) {
    display: none;
  }
`;
