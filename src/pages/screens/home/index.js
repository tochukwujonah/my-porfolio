import React from 'react'
import styled from 'styled-components';
import { Button } from '../../../components/Button';

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

      dffdjfjf
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
  position: absolute;
  left: 19%;

`;

const HomeDetails = styled.div`
  display: flex;
`;

export {Home};