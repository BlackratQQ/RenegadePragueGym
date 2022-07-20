import React, {useEffect, useState} from 'react'
import {FaBars} from "react-icons/fa";
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'

import {
  ArrowDown,
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from './styledNavbar'
import Dropdown from "./Dropdown/Dropdown";

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }


  const [dropdown, setDropdown] = useState(false);


  const onMouseEnter = () => {
    if (window.innerWidth < 768) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 768) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };


  return (
    <div>
      <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>Logo</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars/>
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >About</NavLinks> {/*ve styled componentách je class &:active, která určuje barvu*/}
              </NavItem>
              <NavItem>

                <NavLinks
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >Discover
                  <ArrowDown/>
                  {dropdown && <Dropdown />}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >Sign Up</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="sponsors"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >Sponsors</NavLinks>
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
            </NavMenu>
            <NavBtn>
              <NavBtnLink
                to="/"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  )
}

export default Navbar;