import React from 'react'

import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap
} from './styledSidebar'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
          <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
          <SidebarLink to="singup" onClick={toggle}>Sign Up</SidebarLink>
          <SidebarLink to="sponsors" onClick={toggle}>Sponzoři</SidebarLink>
          <SidebarLink to="coaches" onClick={toggle}>Trenéři</SidebarLink>
          <SidebarLink to="athletes" onClick={toggle}>Atleti</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;