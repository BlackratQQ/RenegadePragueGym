import React, {useEffect, useState} from 'react'
import {FaBars} from "react-icons/fa";
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'

import {MobileIcon, Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavLogoRight, NavMenu,} from './styledNavbar'

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  const [visibleLogo, setVisibleLogo] = useState(false)

  const showLogo = () => {
    if (window.scrollY >= 1200) {
      setVisibleLogo(true)
    } else {
      setVisibleLogo(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', showLogo)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }


  return (
    <div>
      <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" visibleLogo={visibleLogo} onClick={toggleHome}>LOGO</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars/>
            </MobileIcon>
            <NavMenu>
              <NavItem>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="sponsors"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >Sponzoři</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >Úvod</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="coaches"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >Trenéři</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="athletes"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >Atleti</NavLinks>
              </NavItem>
              {/*<NavItem>*/}
              {/*  <NavLinks*/}
              {/*    to="gallery"*/}
              {/*    smooth={true}*/}
              {/*    duration={500}*/}
              {/*    spy={true}*/}
              {/*    exact='true'*/}
              {/*    offset={-80}*/}
              {/*  >Galerie</NavLinks>*/}
              {/*</NavItem>*/}
              {/*<NavItem>*/}
              {/*  <NavLinks*/}
              {/*    to="rozvrh_cenik"*/}
              {/*    smooth={true}*/}
              {/*    duration={500}*/}
              {/*    spy={true}*/}
              {/*    exact='true'*/}
              {/*    offset={-80}*/}
              {/*  >Rozvrh & Ceník</NavLinks>*/}
              {/*</NavItem>*/}
              {/*<NavItem>*/}
              {/*  <NavLinks*/}
              {/*    to="contact"*/}
              {/*    smooth={true}*/}
              {/*    duration={500}*/}
              {/*    spy={true}*/}
              {/*    exact='true'*/}
              {/*    offset={-80}*/}
              {/*  >Kontakt</NavLinks>*/}
              {/*</NavItem>*/}
            </NavMenu>
            <NavLogoRight to="/" visibleLogo={visibleLogo} onClick={toggleHome}>LOGO</NavLogoRight>
            <MobileIcon onClick={toggle}>
              <FaBars/>
            </MobileIcon>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  )
}

export default Navbar;