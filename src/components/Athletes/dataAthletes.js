import React from 'react'
import Athletes from "./Athletes";
import {HeadingH2} from "../../Theme/HeadingH1";
import {AthleteContainer, AthleteMainP, AthleteWrapper, CenterWrapper} from "./styledAthletes";

import Photo1 from "../../images/Photo1.jpg";
import Juracek from '../../images/Matůš Juráček.png'
import Hosek from '../../images/David Hošek.png'

const DataAthletes = () => {
  const athletes = [
    {
      id: 1,
      firstName: 'DAVID',
      nickname: '"SPARŤAN"',
      lastName: 'HOŠEK',
      sport: 'MMA, BOX',
      secondLineSport: '',
      facebook: '/',
      instagram: '/',
      photo: Hosek,
      button: 'Zjistit více'
    },
    {
      id: 2,
      firstName: 'Matůš',
      nickname: '"SLÁVISTA"',
      lastName: 'JURÁČEK',
      sport: 'MMA, BOX',
      secondLineSport: '',
      facebook: '/',
      instagram: '/',
      photo: Juracek,
      button: 'Zjistit více'
    },
    {
      id: 3,
      firstName: 'YEVHENII',
      nickname: '',
      lastName: '"ORLOV"',
      sport: 'MMA',
      secondLineSport: 'ŘECKO-ŘÍMSKÝ ZÁPAS',
      facebook: '/',
      instagram: '/',
      photo: Photo1,
      button: 'Zjistit více'
    },
    {
      id: 4,
      firstName: 'Vít',
      nickname: '',
      lastName: '"MRÁKOTA"',
      sport: 'MMA, GRAPPLING',
      secondLineSport: '',
      facebook: '/',
      instagram: '/',
      photo: Photo1,
      button: 'Zjistit více'
    },
  ]

  const athleteList = athletes.map(athlete =>
    <Athletes athlete={athlete}/>
  )
  return (
    <AthleteContainer id="athletes">
      <HeadingH2 size='3'>Naši Atleti</HeadingH2>
      <AthleteMainP>Aktuálně nás na profesionální úrovní representují tito atleti. RPG též representuje mnoho atletů
        na amatérské úrovni.
      </AthleteMainP>
      <CenterWrapper>
        <AthleteWrapper>
          {athleteList}
        </AthleteWrapper>
      </CenterWrapper>
    </AthleteContainer>
  )
}

export default DataAthletes;