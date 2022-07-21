import React from 'react'
import {
  CardImg,
  CardInfo,
  CardP,
  ContainerCard,
  Paragraph1,
  Paragraph2,
  Paragraph3, Paragraph4,
  TitleWrapper
} from "./styledCoaches";
import {HeadingH3, HeadingH4} from "../../Theme/HeadingH1";

const Coaches = ({coach}) => {
  return (
      <ContainerCard>
        <CardImg src={coach.photo}/>
        <CardInfo>
          <TitleWrapper setAlign={coach.textPosition}>
            <HeadingH3>{coach.name}</HeadingH3>
            <HeadingH4>{coach.role}</HeadingH4>
            <HeadingH4>{coach.role2}</HeadingH4>
          </TitleWrapper>
          <CardP setAlign={coach.textPosition}>
            <Paragraph1>{coach.paragraph1}</Paragraph1>
            <Paragraph2>{coach.paragraph2}</Paragraph2>
            <Paragraph3>{coach.paragraph3}</Paragraph3>
            <Paragraph4>{coach.paragraph4}</Paragraph4>
          </CardP>
        </CardInfo>
      </ContainerCard>
  )
}

export default Coaches;