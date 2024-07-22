import styled from "styled-components";

export const Input = styled.input`
  width: 95%;
  padding: 0.5rem;
  margin-bottom: 0.3rem;
`;

export const TextArea = styled.textarea`
  width: 95%;
  padding: 0.5rem;
  margin-bottom: 0.3rem;
`;

// Styled component for the wrapper
export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: left;
  padding: 0.5rem;
  position: relative;
`;

// Styled component for the input
export const SearchInput = styled.input`
  height: 40px;
  padding: 0 2rem;
  border: 1px solid #dfe1e5;
  border-radius: 1.5rem;
  background-color: #fff;
  font-size: 1rem;
  outline: none;
  transition: box-shadow 0.2s ease-in-out;

  &:focus {
    box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
    border-color: rgba(223, 225, 229, 0);
  }
`;

export const SearchImage = styled.img`
  position: absolute;
  left: 1rem;
  top: 35%;
  margin-left: 0.2rem;
  height: 1rem;
  width: 1rem;
`;
