import React from 'react'

import {HeaderHeading, HeaderOneContainer, HeaderP, HeaderWrapper, LogoWrapper} from "./styledWallpaper";

import Logo from '../../../images/RPG Logo Medium.png'
import Link from '../../GlobalLink/Link'

const Wallpaper = () => {
  return (
    <HeaderOneContainer>
      <HeaderWrapper>
        <LogoWrapper>
          <Link href="/" img src={Logo}/>
        </LogoWrapper>
        <HeaderHeading>
          xxxxx
        </HeaderHeading>
        <HeaderP>
          YYYYY
        </HeaderP>
      </HeaderWrapper>
    </HeaderOneContainer>
  )
}

export default Wallpaper;