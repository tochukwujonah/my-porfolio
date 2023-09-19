import React from 'react'
import styled from 'styled-components';
import ProjectsCard from '../../../components/ProjectsCard';

const MyProjects = () => {
  return (
    <Container>
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
    </Container>
  )
};

const Container =  styled.section`
  margin-top: 45px;
  display: flex;
  justify-content: space-between;
`

export {MyProjects}