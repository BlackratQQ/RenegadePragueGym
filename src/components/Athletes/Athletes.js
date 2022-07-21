import React from 'react'
import {
  AthleteCards,
  AthletePhoto, Button, ButtonWrapper,
  FacebookIcon,
  FirstName, InstagramIcon,
  LastName,
  NameWrapperH3,
  Nickname,
  SocialWrapper,
  SportName,
  SportWrapper
} from "./styledAthletes";
import Link from "../GlobalLink/Link";

const Athletes = ({athlete}) => {

  return (
   <p>
     <AthleteCards>
       <NameWrapperH3>
         <FirstName>{athlete.firstName}</FirstName>
         <Nickname>{athlete.nickname}</Nickname>
         <LastName>{athlete.lastName}</LastName>
       </NameWrapperH3>
       <SportWrapper>
         <SportName>{athlete.sport}</SportName>
         <SportName>{athlete.secondLineSport}</SportName>
       </SportWrapper>
       <SocialWrapper>
         <Link href={athlete.facebook}>
           <FacebookIcon/>
         </Link>
         <Link href={athlete.instagram}>
           <InstagramIcon/>
         </Link>
       </SocialWrapper>
       <AthletePhoto src={athlete.photo}/>
       <ButtonWrapper>
         <Button>{athlete.button}</Button>
       </ButtonWrapper>
     </AthleteCards>
   </p>
 )
}

export default Athletes;