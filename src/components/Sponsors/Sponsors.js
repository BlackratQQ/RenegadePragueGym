import React from 'react'
import Link from '../GlobalLink/Link'

import Sponsor1 from '../../images/Miestate-Logo.png'
import Sponsor2 from '../../images/Navoz.to-White-175px.png'

import {WrapperLink} from './styledSponsors'

const Sponsors = () => {
  return (
    <WrapperLink id="sponsors">
      <Link href="https://www.google.com" img src={Sponsor1} justifySelf={'right'}/>
      <Link href="https://www.google.com" img src={Sponsor2} justifySelf={'left'}/>
    </WrapperLink>
  )
}

export default Sponsors;