import styled from "styled-components";

export const DrawerSections = styled.div`
  display: flex;
  height: 100%;
`;

export const LeftSection = styled.div`
  height: 100%;
  border-right: 1px solid #ccc;
  border-top: 1px solid #ccc;
  background-color: #dfefff;
`;

export const RightSection = styled.div`
  height: 100%;
`;
export const Tab = styled.button<{ selected?: boolean }>`
  background-color: ${(props) => (props.selected ? "#e8eef5" : "transparent")};
  border: none;
  border-bottom: 1px solid #ccc;
  width: 100%;
  height: 3rem;
`;

export const Label = styled.label`
  text-transform: capitalize;
  font-size: 0.8rem;
`;
export const OptionObj = styled.div`
  display: flex;
  padding: 0.5rem 0.2rem;
`;

export const FooterButtons = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
  gap: 0.5rem;
  & > button {
    flex: 1;
    text-transform: none;
    text-align: center;
    border-radius: 0.25rem;
    justify-content: center;
  }
`;
