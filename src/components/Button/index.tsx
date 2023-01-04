import React from 'react';
import { StyledButton } from './styles';

type Props = {
  text: string;
  onClick?: () => void;
}

const Button = ({ onClick, text }: Props) => {
  return (
    <StyledButton onClick={onClick}>{ text }</StyledButton>
  );
};

export default Button;