import styled from "styled-components";

export const Wrapper = styled.div`
width: 300px;
padding: 20px;
margin: 0 auto;
text-align: center;
@media screen and (min-width: 768px) {
  width: 500px;
  padding: 40px;
}
`;

export const Button = styled.button`
display: inline-block;
cursor: pointer;
border-radius: 4px;
border-style: outset;
color: inherit;
`;

export const Input = styled.input`
width: 70%;
padding: 5px;
outline: transparent;
border: 1px solid #2160c4;
border-radius: 4px;
color: inherit;
`