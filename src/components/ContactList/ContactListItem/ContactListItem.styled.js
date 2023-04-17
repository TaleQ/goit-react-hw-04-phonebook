import styled from "styled-components";

export const ContactItem = styled.li`
display: flex;
gap: 15px;
justify-content: center;
font-size: 22px;
@media screen and (max-width: 767px) {
  flex-direction: column;
  align-items: center;

}
`;

export const DeleteButton = styled.button`
width: 65px;
background-color: #ffffff;
border: 1px solid #2160c4;
color: #2160c4;
font-size: 16px;
&:active {
  background-color: #2160c4;
color: #ffffff;
}
`