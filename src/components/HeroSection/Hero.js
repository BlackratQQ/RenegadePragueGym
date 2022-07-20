import React, {useState} from 'react'
import Video from '../../video/video.mp4'
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg
} from './styledHero'
import {Button} from '../ButtonElements'

const Hero = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }


  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>Sign up for a new account today and recieve $250 in credit towards your next paymant.</HeroP>
        <HeroBtnWrapper>
          <Button to="signup"
            onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary="true"
                  dark="true">
            Get started {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero;