import styled from "styled-components";
import { theme } from "../../common/theme";

export const TaskWrapper = styled.div`
  flex-basis: 98%;
  @media (min-width:656px) {
    flex-basis: 48%;
  }
  @media (min-width: 916px) {
    flex-basis: 30%;
  }
`;

export const Card = styled.div`
  padding: 1rem;
  background-color: ${theme.colors.WHITE};
  border-radius: 0.5rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  text-align: left;
  display: grid;
  grid-gap: 0.5rem;
`;

export const PriorityView = styled.div<{ color: string; bgcolor: string }>`
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor};
  width: fit-content;
  border-radius: 0.25rem;
`;

export const StatusOption = styled.div<{
  color: string;
  bgcolor: string;
  fullWidth?: boolean;
}>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor};
  font-size: 0.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0.2rem 1.5rem 0.2rem 0.5rem;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  box-sizing: border-box;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;
export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.div`
  width: 100%;
  overflow: hidden;
  word-break: break-all;
  white-space: nowrap;
`;
