import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../colors';

import{
  ActiveArrow,
  HomeIcon,
  StacksIcon,
  UserIcon,
  MessageIcon,
  GithubIcon
} from '../assets'

const SideNav = () => {

  const navigate = useNavigate();
  const params = useParams();


  const [tabItems, setTabItems] = useState([
    { text: "Home", TabIcon: HomeIcon, TabIconActive: ActiveArrow, active: params.route === "/" },
    { text: "My Projects", TabIcon: StacksIcon, TabIconActive: ActiveArrow, active: params.route === "my-projects" },
    { text: "About Me", TabIcon: UserIcon, TabIconActive: ActiveArrow, active: params.route === "about-me" },
    { text: "Contact Me", TabIcon: MessageIcon, TabIconActive: ActiveArrow, active: params.route === "contact-me" },
    { text: "My Github", TabIcon: GithubIcon, TabIconActive: ActiveArrow, active: params.route === "my-github" }
    
]);

const changeActiveTab = (idx, text) => {
  console.log(idx, text);
  //Make all tabs inactive
  tabItems.forEach(tab => tab.active = false);

  //Make copy of tabItems
  const tabsCopy = tabItems.filter(tab => tab.active === false);

  //Make current tab active
  tabsCopy[idx].active = true;
  setTabItems(tabsCopy);

  //Route
  navigate(text === "Home" ? "/" : `/${text.toLowerCase().replace(" ", "-")}`);
}
    

  return (
    <Container>
      
      
      <Logo>
        <h3> Toks </h3><span></span>
      </Logo>

      <NavLinks>
        {
          tabItems.map(({TabIcon, text, TabIconActive, active }, idx) => (
            <div key={idx} onClick={() => changeActiveTab(idx, text)}>
              <li> 
                <img src={TabIcon} alt="" />
                {text}
                {active && <img src={TabIconActive} alt="" />}
                {/* <img src={ActiveArrow} alt="" /> */}
              </li>

            </div>
          )
          )
        }
      </NavLinks>

        
      
    </Container>
  )
};

const Container = styled.aside`
    width: 100%;
    background-color: ${colors.secondary};
    height: 100vh;
    padding-top: 49px;
`
const Logo = styled.div`
  display: flex;
  padding-left: 48px;
  height: fit-content;
  border: 1px solid red;

  & > h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    line-height: 0.7;
    padding-right: 2px;
  }
  

  & > span{
    width: 5px;
    height: 5px;
    align-self: flex-end;
    border-radius: 50%;
    background-color: ${colors.btn_links};

  }
`
const NavLinks = styled.div`
  
  & > div {
    cursor: pointer;
    padding-left: 48px;

    & > li {
      display: flex;
      font-family: 'Poppins', sans-serif;
      font-size: 1.6rem;
      font-weight: 500;
      list-style: none;
    }
  }
`


export {SideNav}