import React from 'react'
import styled from 'styled-components';
import { OtherHeaderBg } from '../assets';

const Header = ({header}) => {
  return (
    <Container>
      <h1>{header}</h1> 
    </Container>
  )
};

const Container = styled.section`
  background:url(${OtherHeaderBg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  

  & > h1{
    /* font-family: 'Space Grotesk', sans-serif; */
    text-align: center;
    padding: 30px 0;
  }
` 

export {Header}