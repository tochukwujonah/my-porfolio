import React from 'react'
import styled from 'styled-components'

const ProjectsCard = () => {
  return (
    <Container>
        <h4>
            Adaku Project
        </h4>
        <p>
            ProjectsCard
        </p>
        <div>
            <Technologies>
                Styled Components
            </Technologies>
            <Technologies>
                Styled Components
            </Technologies>
        </div>

        <a href="#">Visit Website</a>
        
    </Container>
  )
}

export default ProjectsCard

const Container = styled.div`
    width: 32%;
    background: #0A1114;
    padding: 45px 20px;

    & > h4 {
        color: #FFF;
        font-size: 20px;
        font-weight: 700;
        font-style: normal;
        
    }

    & > p {
        color: #C8C8C8;
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: normal;
        
    }

    & div {
        display: flex;
        justify-content: space-between;
    }

    & a {
        color: #03DAC6;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        border: 2px solid red;
    }
`

const Technologies = styled.span`
    margin-top: 24px;
    padding: 10px 14px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    color: #6694AD;
    background: #0E161B;
    margin-bottom: 32px;
    
    
`