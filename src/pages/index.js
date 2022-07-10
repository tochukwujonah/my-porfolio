import React, { useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { SideNav } from '../components/SideNav'
import { 
    Container,
    PorfolioBody,
    PorfolioHeader, 
    MainContent,

} from '../components/styles/IndexPage.styled'
import { MdOutlineNotes } from 'react-icons/md'


const Index = () => {

    const [dropMenuIsVisible, setDropMenuIsVisible] = useState(false);

    const showSidebar = () =>{
    setDropMenuIsVisible( <SideNav /> )
  }
  const params = useParams();


  return (
    <Container>
        <div>
            <SideNav setShow={setDropMenuIsVisible} show={dropMenuIsVisible} />
        </div>

        <PorfolioBody>
            <PorfolioHeader>
            { params.sub ? null : <Header /> }
            </PorfolioHeader>

            <MainContent>
                <Outlet />
            </MainContent>
        </PorfolioBody>
        
        
    </Container>
  )
}

export {Index}