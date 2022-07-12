import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
        ©2022 Toks, All Right Reserved
    </Container>
  )
};

const Container =  styled.section`
    text-align: center;
    width: 1130px;
    max-width: 100%;
`

export {Footer}