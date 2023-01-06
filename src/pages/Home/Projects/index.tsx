import React from 'react';
import { ProjectsButton, StyledSection, StyledSubtitle, StyledTitle, Wrapper, StyledImg } from './styles';

import CocaIcon from '../../../assets/icons/cocacola.svg';

const Projects = () => {
  return (
    <StyledSection>
      <Wrapper>
        <StyledTitle>Nossos projetos</StyledTitle>
        <StyledSubtitle>
          Vale   |   <strong>Coca-Cola</strong>   |   Rede Meridional
        </StyledSubtitle>
        <StyledImg src={CocaIcon} alt="Logo da Coca Cola" />
        <StyledTitle>Coca-Cola</StyledTitle>
        <StyledSubtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        </StyledSubtitle>
        <ProjectsButton>Conheça todas as cases</ProjectsButton>
      </Wrapper>
    </StyledSection>
  );
};

export default Projects;