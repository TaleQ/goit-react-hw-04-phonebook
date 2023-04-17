import styled from 'styled-components';
import { Button, Input } from 'components/Common.styled';

export const StyledForm = styled.form`
margin: 20px auto;
padding: 40px;
display: flex;
flex-direction: column;
gap: 20px;
border-radius: 1rem;
background-color: #ffffff;
border: 1px solid #2160c4;
`;

export const FormLabel = styled.label`
display: flex;
justify-content: flex-end;
align-items: baseline;
`;

export const FormInput = styled(Input)`
width: 70%;
margin-top: 5px;
margin-left: 5px;
@media screen and (min-width: 768px) {
  margin-top: 0;
  margin-left: 10px;
}
`;

export const FormButton = styled(Button)`
width: 200px;
margin: 0 auto;
padding: 10px;
background-color: #2160c4;
border: 1px solid transparent;
color: #ffffff;
&:hover{
  box-shadow: 8px 8px 24px -7px rgba(28, 33, 141, 1);
}
`
