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
          <SidebarLink to="sponsors" onClick={toggle}>Sponzoži</SidebarLink>
          <SidebarLink to="about" onClick={toggle}>Úvod</SidebarLink>
          <SidebarLink to="coaches" onClick={toggle}>Trenéři</SidebarLink>
          <SidebarLink to="athletes" onClick={toggle}>Atleti</SidebarLink>
          <SidebarLink to="gallery" onClick={toggle}>Galerie</SidebarLink>
          <SidebarLink to="rozvrh_cenik" onClick={toggle}>Rozvrh & Ceník</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>Kontakt</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;