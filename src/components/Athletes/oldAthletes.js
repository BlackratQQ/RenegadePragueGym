import React from 'react'
import Link from "../GlobalLink/Link";

import Photo1 from '../../images/Photo1.jpg'
import Photo2 from '../../images/Photo1.jpg'
import Photo3 from '../../images/Photo1.jpg'
import Photo4 from '../../images/Photo1.jpg'

import {
  AthleteCards,
  AthleteContainer,
  AthletePhoto,
  AthleteMainP,
  AthleteWrapper,
  Button,
  ButtonWrapper,
  CenterWrapper,
  FacebookIcon,
  FirstName,
  InstagramIcon,
  LastName,
  NameWrapperH3,
  Nickname,
  SocialWrapper,
  SportName,
  SportWrapper
} from './styledAthletes'
import {HeadingH2} from "../../Theme/HeadingH1";



const OldAthletes = () => {
  return (

    <AthleteContainer id="athletes">
      <HeadingH2 size='3'>Naši Atleti</HeadingH2>
      <AthleteMainP>Aktuálně nás na profesionální úrovní representují tito atleti. RPG též representuje mnoho atletů
        na amatérské úrovni.
      </AthleteMainP>
      <CenterWrapper>
        <AthleteWrapper>
          <AthleteCards>
            <NameWrapperH3>
              <FirstName>Name</FirstName>
              <Nickname>"Nickname"</Nickname>
              <LastName>LastName</LastName>
            </NameWrapperH3>
            <SportWrapper>
              <SportName>MMA, Box</SportName>
            </SportWrapper>
            <SocialWrapper>
              <Link href="/">
                <FacebookIcon/>
              </Link>
              <Link href="/">
                <InstagramIcon/>
              </Link>
            </SocialWrapper>
            <AthletePhoto src={Photo1}/>
            <ButtonWrapper>
              <Button>Zjistit více</Button>
            </ButtonWrapper>
          </AthleteCards>
          <AthleteCards>
            <NameWrapperH3>
              <FirstName>Name</FirstName>
              <Nickname>"Nickname"</Nickname>
              <LastName>LastName</LastName>
            </NameWrapperH3>
            <SportWrapper>
              <SportName>MMA, Box</SportName>
            </SportWrapper>
            <SocialWrapper>
              <Link href="/">
                <FacebookIcon/>
              </Link>
              <Link href="/">
                <InstagramIcon/>
              </Link>
            </SocialWrapper>
            <AthletePhoto src={Photo2}/>
            <ButtonWrapper>
              <Button>Zjistit více</Button>
            </ButtonWrapper>
          </AthleteCards>
          <AthleteCards>
            <NameWrapperH3>
              <FirstName>Name</FirstName>
              <Nickname>"Nickname"</Nickname>
              <LastName>LastName</LastName>
            </NameWrapperH3>
            <SportWrapper>
              <SportName>MMA, Box</SportName>
            </SportWrapper>
            <SocialWrapper>
              <Link href="/">
                <FacebookIcon/>
              </Link>
              <Link href="/">
                <InstagramIcon/>
              </Link>
            </SocialWrapper>
            <AthletePhoto src={Photo3}/>
            <ButtonWrapper>
              <Button>Zjistit více</Button>
            </ButtonWrapper>
          </AthleteCards>
          <AthleteCards>
            <NameWrapperH3>
              <FirstName>Name</FirstName>
              <Nickname>"Nickname"</Nickname>
              <LastName>LastName</LastName>
            </NameWrapperH3>
            <SportWrapper>
              <SportName>MMA, Box</SportName>
            </SportWrapper>
            <SocialWrapper>
              <Link href="/">
                <FacebookIcon/>
              </Link>
              <Link href="/">
                <InstagramIcon/>
              </Link>
            </SocialWrapper>
            <AthletePhoto src={Photo4}/>
            <ButtonWrapper>
              <Button>Zjistit více</Button>
            </ButtonWrapper>
          </AthleteCards>
        </AthleteWrapper>
      </CenterWrapper>
    </AthleteContainer>

)
}

export default OldAthletes;