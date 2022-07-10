import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { Index } from '../pages';
import { 
    AboutMe,
    ContactMe,
    Home,
    MyGithub,
    MyProjects } 
    from '../pages/screens';

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={ <Index/> } >
                <Route index element={<Home />} />
                <Route path='/my-projects' element={ <MyProjects/> } />
                <Route path='/about-me' element={ <AboutMe /> } />
                <Route path='/contact-me' element={ <ContactMe /> } />
                <Route path='/my-github' element={ <MyGithub /> } />
            </Route>
        </Routes>
    </Router>
  )
};

export {AppRouter};