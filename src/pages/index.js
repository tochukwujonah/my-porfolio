import React, { useState } from 'react'
import { Outlet, useParams, useLocation } from 'react-router-dom'
import { Header } from '../components/Header'
import { SideNav } from '../components/SideNav'
import { Footer } from '../components/Footer'
import { 
    Container,
    PorfolioBody,
    PorfolioHeader, 
    MainContent,

} from '../components/styles/IndexPage.styled'
import { MdOutlineNotes } from 'react-icons/md'


const Index = () => {

    const [dropMenuIsVisible, setDropMenuIsVisible] = useState(false);

    const params = useParams();

    const route = window.location.href;



  return (
    <Container>
        <div>
            <SideNav setShow={setDropMenuIsVisible} show={dropMenuIsVisible} />
        </div>

        <PorfolioBody>
            <PorfolioHeader>
            { 
            // params.route === 'about-me' 
            route.includes("about-me")
                ? <Header header={'<Get to know me/>'} />
                    : route.includes("contact-me")
                        ? <Header header={'<Let`s talk/>'} />
                            : route.includes("my-github")
                                ? <Header header={'<The Codebase/>'} />
                                    : route.includes("my-projects")
                                        ? <Header header={'<Building Amazing Project/>'} />
                                            : null

        }
            </PorfolioHeader>

            <MainContent>
                <Outlet />
            </MainContent>
            <Footer/>
        </PorfolioBody>
        
        
    </Container>
  )
}

export {Index}