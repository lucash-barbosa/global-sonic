import React from 'react';
import { StyledButton } from './styles';

type Props = {
  text: string;
  onClick?: () => void;
}

const ButtonCoquelicot = ({ onClick, text }: Props) => {
  return (
    <StyledButton onClick={onClick}>{ text }</StyledButton>
  );
};

export default ButtonCoquelicot;