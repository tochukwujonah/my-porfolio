import React from 'react'
import styled from 'styled-components'

import { AiOutlineLink } from 'react-icons/ai'

import { colors } from '../colors'



const RecentProjects = ({projectdata}) => {
  return (
    <div>
        
            <RecentBox>
              <div>
                <h6>{projectdata?.projectTitle}</h6>
                <a href={projectdata?.url} target='_blank'>
                    <AiOutlineLink color='#03DAC6' size={'14px'} cursor='pointer' />
                </a>
                
              </div>
              <small>
                {projectdata?.description}
              </small>

              <ul>
                <li>{projectdata?.tools?.toolOne}</li>
                <li>{projectdata?.tools?.toolTwo}</li>
                <li>{projectdata?.tools?.toolThree}</li>
                <li>{projectdata?.tools?.toolFour}</li>
              </ul>
              
            </RecentBox>
          
    </div>
  )
}

const RecentProject = styled.aside`
  margin-top: 20px;
`;

const RecentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h3{
    font-size: 20px;
  }

  & > p{
    font-size: 16px;
    color: ${colors.btn_links};
  }
`

const RecentBox = styled.div`
  background-color: ${colors.box_bg};
  padding: 20px;

  & > div{
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  & small{
    font-size: 12px;
  }

  & ul{
    display: flex;
    justify-content: space-between;
    & li{
        
    }
  }
`

export {RecentProjects}