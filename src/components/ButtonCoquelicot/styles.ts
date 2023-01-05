import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #FF3D00;
  border-radius: 5px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 89.7%;
  color: ${({theme}) => theme.colors.white};
  padding: 18px 27px;
`;