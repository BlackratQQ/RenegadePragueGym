import React from 'react'
import {CardImg, CardInfo, CardP, Container, ContainerCard, ContainerWrapper, TitleWrapper} from "./styledCoaches";

import photo1 from '../../images/Photo1.jpg'
import {HeadingH2, HeadingH3, HeadingH4} from "../../Theme/HeadingH1";


const FourColumnsStyles = () => {

  return (
    <Container id="coaches">
      <HeadingH2 size='3'>Title H2</HeadingH2>
      <ContainerWrapper>
        <ContainerCard>
          <CardImg src={photo1}/>
          <CardInfo>
            <TitleWrapper setAlign={'center'}>
              <HeadingH3>Title #1</HeadingH3>
              <HeadingH4> Another title</HeadingH4>
            </TitleWrapper>
            <CardP>Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text
              Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some
              text Some text Some text Some text Some text Some text Some text
              Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some
              text Some text Some text Some text Some text Some text Some text
              Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some
              text Some text Some text Some text Some text Some text Some text
            </CardP>
          </CardInfo>
        </ContainerCard>
        <ContainerCard>
          <CardImg src={photo1}/>
          <CardInfo>
            <TitleWrapper setAlign={'center'}>
              <HeadingH3>David Vyvážil</HeadingH3>
              <HeadingH4>Head Coach</HeadingH4>
            </TitleWrapper>
            <CardP setAlign={'center'}>Třicet let v bojových sportech. Prošel Judem, Zápasem, Boxem, Thaiboxem,
              Kickboxem, Sambem a
              Brazilským Jiu-Jitsu.

              Jeden z prvních zápasníků, v bojích bez pravidel (nyní MMA) a zakladatel gymů v
                Týništi nad Orlicí, Dvoře Králové nad Labem, Hradci Králové a Praze.

              První zápas v MMA absolvoval v roce
                1999. Ukončil zápasovou kariéru se skórem 8-3-0. Poté už se věnuje MMA pouze jako trenér.

            </CardP>
          </CardInfo>
        </ContainerCard>
        <ContainerCard>
          <CardImg src={photo1}/>
          <CardInfo>
            <TitleWrapper setAlign={'center'}>
              <HeadingH3>Richard Hes</HeadingH3>
              <HeadingH4>Silový a kondiční trenér</HeadingH4>
              <HeadingH4>Trenér boxu</HeadingH4>
            </TitleWrapper>
            <CardP setAlign={'center'}>Odzápasil v MMA, boxu a K-1 okolo 20 zápasů a nyní se věnuje bojovým sportům jako
              trenér. Má za sebou
              kurzy od Core training, Barbar gym, Institut moderní výživy, zahraniční semináře a stáž v Top Atlet.
            </CardP>
          </CardInfo>
        </ContainerCard>
        <ContainerCard>
          <CardImg src={photo1}/>
          <CardInfo>
            <TitleWrapper setAlign={'center'}>
              <HeadingH3>Ján Horák</HeadingH3>
              <HeadingH4>Dětský oddíl</HeadingH4>
            </TitleWrapper>
            <CardP setAlign={'center'}>Přes dvacet let se věnoval kariéře zápasníka ve volném stylu, pak přešel k Brazislkému Jiu-Jitsu,
              grapplingu a amatérskému MMA. Je mimo jiné Mistr Evropy v Brazislkému Jiu-Jitsu a grapplingu z r.2015 a z
              r.2017, Mistr světa v amatérském MMA z r.2015, Mistr Polska v grapplingu z r.2018. Šampion organizace NAGA
              z r.2019. První licenci jako dětský trenér získal na Slovensku v r.1997. <br/>Dále má v ČR licenci jako trenér
              MMA III.třídy od r.2013, sportovní instruktor dětí a mládeže III.třídy od r.2019, rozhodčí ČSMMA od
              r.2019. Tréninky jsou zaměřené na základy gymnastiky, zápasu, atletiky, juda, boxu aj. Vše hravou formou.
            </CardP>
          </CardInfo>
        </ContainerCard>
      </ContainerWrapper>
    </Container>
  )
}

export default FourColumnsStyles;