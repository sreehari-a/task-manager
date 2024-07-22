import styled from "styled-components";

export const Label = styled.label`
display: block;
color: #6e6e6e;
font-weight: 600;
font-size: 0.8rem;
margin-bottom: 0.3rem;
`;

export const ButtonGroup = styled.div`
display: flex;
padding-top: 1rem;
flex-direction: row-reverse;
flex-grow: 0;
& button {
    margin-left: 1rem
}
`