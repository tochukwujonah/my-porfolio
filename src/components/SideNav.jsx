import React, { useState } from 'react'
import { useParams, useNavigate, Location, Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../colors';
import { RxHamburgerMenu } from 'react-icons/'

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
  const route = window.location.href;


  const [tabItems, setTabItems] = useState([
    { text: "Home", TabIcon: HomeIcon, TabIconActive: ActiveArrow, active: "/" },
    { text: "My Projects", TabIcon: StacksIcon, TabIconActive: ActiveArrow, active: "/my-projects" },
    { text: "About Me", TabIcon: UserIcon, TabIconActive: ActiveArrow, active: "/about-me" },
    { text: "Contact Me", TabIcon: MessageIcon, TabIconActive: ActiveArrow, active: "/contact-me" },
    { text: "My Github", TabIcon: GithubIcon, TabIconActive: ActiveArrow, active: "/my-github" }
    
]);

    

  return (
    <Container>
      
      
      <Logo>
        <h3> Toks </h3><span></span>
      </Logo>

      <NavLinks>
        {
          tabItems.map((item, idx) => {
            return (
              
              <div
                style={{background: `${route.endsWith(item.active) ? "linear-gradient(270deg, rgba(37, 35, 61, 0) 0%, #25233D 100%)" : ''}`, }}
                >
                  <Link to={item.active} key={idx} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} >
                  <li> 
                    <img src={item.TabIcon} alt="" />
                    <h5>{item.text}</h5>
                    
                    
                    {/* <img src={ActiveArrow} alt="" /> */}
                  </li>
                  <span>{route.endsWith(item.active) && <img src={item.TabIconActive} alt="tab icon" />}</span>
                  </Link>
              </div>
              
            )
            
          }
          
          ) 
          
          
        }
      </NavLinks>

        
      
    </Container>
  )
};

const Container = styled.aside`
    width: 19%;
    background-color: ${colors.secondary};
    height: 100vh;
    padding-top: 49px;
    position: fixed;
`
const Logo = styled.div`
  display: flex;
  padding-left: 48px;
  padding-bottom: 20px;
  height: fit-content;
  /* border: 1px solid red; */

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
  /* position: absolute; */
  /* width: inherit; */
  
  & > div {
    cursor: pointer;
    margin-top: 30px;
    padding-left: 48px;
    /* width: 100%; */

    /* :active{
      background: linear-gradient(270deg, rgba(37, 35, 61, 0) 0%, #25233D 100%);
    } */


    &  li {
      display: flex;
      align-items: center;
      /* justify-content: space-around; */
      padding: 10px 0;
      list-style: none;

      & > h5{
        padding-left: 24px;
        align-self: flex-start;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        color: white;
      }

      & > span{
        /* align-self: flex-end; */
        /* padding-left: 70px; */
        /* position: absolute;
        left: 90%; */
        
      }
    }
  }
`


export {SideNav}