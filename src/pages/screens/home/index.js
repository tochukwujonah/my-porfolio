import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { Button } from '../../../components/Button';
import { InternComponent } from '../../../components/InternComponent';

import {
  HomeBg,
  DownloadIcon,
  MiniMe
} from '../../../assets'
import { colors } from '../../../colors';


const Home = () => {
  return (
    <Container>
      <HomeHeader>
        <ImgContainer>
          <img src={HomeBg} alt="" />
        </ImgContainer>

          <SubHeader>
            <MyDetails>
              <NameAndRole>
                <h1>Tochukwu Jonah</h1>
                <h4>Frontend Developer</h4>
              </NameAndRole>
              <ProfilePicture src={MiniMe}/>
            </MyDetails>
            <Button filled image={DownloadIcon} bgColor={colors.btn_links} text={'Download Resume'}/>
          </SubHeader>
      </HomeHeader>

      <HomeDetails>
        <AboutBox>
          <h3>About Me</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio consectetur vel arcu non, tempor diam rhoncus. Quam posuere eros, eu dolor diam. Scelerisque pellentesque eu augue adipiscing semper. A vestibulum adipiscing aliquet quis consectetur. Suscipit aenean consectetur malesuada risus, pulvinar lacus. <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio consectetur vel arcu non, tempor diam rhoncus. Quam posuere eros, eu dolor diam. <a href="/about-me">Read More</a>
            
          </p>
          <div>
            <h3>Work Experience</h3>
            <InternComponent />
          </div>
          
        </AboutBox>
        
        <SkillBox>
          <h3>I write</h3>

          <SingledOutSkills>
            <h6>HTML, CSS & CSS modules</h6>
            <h6>Javascript</h6>
            <h6>React & Next JS</h6>
            <h6>Styled components</h6>
            <h6>Chakra UI</h6>
          </SingledOutSkills>
        </SkillBox>
      </HomeDetails>
    </Container>
  )
};

const Container = styled.section`
  overflow-x: hidden;
  
`;
const HomeHeader = styled.div`

`;

const ImgContainer = styled.div`

  & > img{
    /* height: 100px; */
    object-fit: contain;
  }
`;

const SubHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;

  & Button{
    margin-top: 15px;
    height: fit-content;
  }
`;

const MyDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfilePicture = styled.img`
  position: absolute;
  top: -80%;
  left: 3%;
`;

const NameAndRole = styled.div`
  position: relative;
  right: -80%;

`;

const HomeDetails = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 30px;
`;

const AboutBox = styled.div`
  flex: 2.2;

  & > :last-child{
    /* margin-top: 10px; */
  }

  & p{
    font-size: 1.4rem;
    line-height: 22.652px;

    & a{
    color: ${colors.btn_links} !important;
    text-decoration: none;
  }
  
  }

  

`;
const SkillBox = styled.div`
  flex: 1;
  padding-left: 30px;
`;

const SingledOutSkills = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > h6 {
    width: max-content;
    font-size: 13px;
    font-weight: 400;
    padding: 8px 16px;
    margin-top: 6px;
    background-color: ${colors.tag_bg};
    color: ${colors.tag_color};
  }
  `;

export {Home};