import React from 'react'
import Coaches from "./Coaches";
import {Container, ContainerWrapper} from "./styledCoaches";
import {HeadingH2} from "../../Theme/HeadingH1";

import photo1 from '../../images/Photo1.jpg'

const dataCoaches = () => {
  const coaches = [
    {
      id: 1,
      name: 'David Vyvážil',
      role: 'Head Coaches',
      role2: '',
      photo: photo1,
      paragraph1: 'Třicet let v bojových sportech. Prošel Judem, Zápasem, Boxem, Thaiboxem, Kickboxem, Sambem a Brazilským Jiu-Jitsu.',
      paragraph2: 'Jeden z prvních zápasníků, v bojích bez pravidel (nyní MMA) a zakladatel gymů v Týništi nad Orlicí, Dvoře Králové nad Labem, Hradci Králové a Praze.',
      paragraph3: 'První zápas v MMA absolvoval v roce 1999. Ukončil zápasovou kariéru se skórem 8-3-0. Poté už se věnuje MMA pouze jako trenér.',
      paragraph4: '',
      textPosition: 'center',
    },
    {
      id: 2,
      name: 'Richard Hes',
      role: 'Silový a kondiční trenér',
      role2: 'Trenér boxu',
      photo: photo1,
      paragraph1: 'Odzápasil v MMA, boxu a K-1 okolo 20 zápasů a nyní se věnuje bojovým sportům jako trenér.',
      paragraph2: 'Má za sebou kurzy od Core training, Barbar gym, Institut moderní výživy, zahraniční semináře a stáž v Top Atlet.',
      paragraph3: '',
      paragraph4: '',
      textPosition: 'center',
    },
    {
      id: 3,
      name: 'Roman Čedík',
      role: 'Grappling',
      role2: 'Brazilský Jiu-Jitsu',
      photo: photo1,
      paragraph1: 'Vystudoval vysokou školu tělesné výchovy a sportu Palestra, obor: Sportovní a kondycné specialista. Působí 32 let v oblasti bojových umění a sportu.',
      paragraph2: 'Bývalí reprezentant ČR v Unifightu a Brazilian Jiu jitsu. Několik medajlových postů z evropských a světových šampionátů. Černý pás z roku 2016 v Brazislkým Jiu-Jitsu.',
      paragraph3: 'Svojí sportovní kariéru ukončil roku 2018. Dnes trenér Brazislkého Jiu-Jitsu, MMA. Dale i fitness a kondiční trenér.',
      textPosition: 'center',
    },
    {
      id: 4,
      name: 'Ján Horák',
      role: 'Dětský oddíl',
      role2: '',
      photo: photo1,
      paragraph1: 'Přes dvacet let se věnoval kariéře zápasníka ve volném stylu, pak přešel k Brazislkému Jiu-Jitsu, grapplingu a amatérskému MMA.',
      paragraph2: 'Je mimo jiné Mistr Evropy v Brazislkému Jiu-Jitsu a grapplingu z r.2015 a z r.2017, Mistr světa v amatérském MMA z r.2015, Mistr Polska v grapplingu z r.2018. Šampion organizace NAGA z r.2019.',
      paragraph3: 'První licenci jako dětský trenér získal na Slovensku v r.1997. Dále má v ČR licenci jako trenér MMA III.třídy od r.2013, sportovní instruktor dětí a mládeže III.třídy od r.2019, rozhodčí ČSMMA od r.2019.',
      paragraph4: 'Tréninky jsou zaměřené na základy gymnastiky, zápasu, atletiky, juda, boxu aj. Vše hravou formou.',
      textPosition: 'center',
    },
    {
      id: 5,
      name: 'Jaroslav Hrdlička',
      role: 'Trenér MMA',
      role2: 'Team B',
      photo: photo1,
      paragraph1: 'Bojovým sportům se naplno věnuje 7 let. Dříve závodil ve sportovní gymnastice a atletice. V RPG má na starost "B" tým. Je dvojnásobným mistrem České republiky asociace ČSMMA a vítěz IMMAF Pan American Open Championships.',
      paragraph2: 'Jarda je trenér MMA trenér III. třídy a absolvent UK FTVS (Bc.). Trenérské úspěchy - 2x titul vicemistra ČR a titul mistra ČR.',
      paragraph3: '',
      paragraph4: '',
      textPosition: 'center',
    },
    {
      id: 6,
      name: 'Jan Klouda',
      role: 'Trenér MMA',
      role2: 'Team B',
      photo: photo1,
      paragraph1: 'Prošel Brazilským Jiu-Jitsu, boxem a MMA. V RPG má na starost „B“ tým. Mistr České republiky asociace ČSMMA 2018.',
      paragraph2: 'Modrý pás v Brazilským Jiu-Jitsu. MMA trenér III. třídy. Trenérské úspěchy 2x titul mistra ČR. Aktivně jezdí vypomáhat protipytláckým hlídkám ve světě.',
      textPosition: 'center',
    },
  ]

  const coachList = coaches.map(coach =>
    <Coaches coach={coach}/>
  )

  return (
      <Container id="coaches">
        <HeadingH2 size='3'>Title H2</HeadingH2>
        <ContainerWrapper>
          {coachList}
        </ContainerWrapper>
      </Container>

  )
}

export default dataCoaches;