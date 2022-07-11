import React from 'react'
import styled from 'styled-components'
import { Genesys } from '../assets'

const InternComponent = () => {
  return (
    <Container>
        <img src={Genesys} alt="Genesys tech logo" />
        <div>
            <h4>Frontend Developer - Intern</h4>
            <h5>Genesys Tech Hub</h5>
            <small>August, 2021 - May, 2022</small>
        </div>

    </Container>
  )
}

const Container = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 37%;
    align-items: flex-start;

    & > div{
        
        & > h4{
            font-size: 16px;
        }

        & > h5{
            font-size: 14px;
        }

        & > small{
            font-size: 12px;
        }
    }
`

export {InternComponent}