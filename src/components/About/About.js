import React from 'react'
import {AboutContainer, AboutSectionP, AboutWrapper, FacebookSection} from "./styledAbout";
import {HeadingH2} from "../../Theme/HeadingH1";

const About = () => {
  return (
    <AboutContainer id={"about"}>
      <HeadingH2 size='3'>Renegade Prague Gym Z.S.</HeadingH2>
      <AboutWrapper>
        <AboutSectionP>
          Vše začalo přibližně v roce 2013, kdy se zakladatel a headcoach David Vyvážil přistěhoval do Prahy z Hradce Králové. V té době se věnoval trénování MMA již od roku 1999. V Hradci Králové v jeho gymu začali prakticky všichni úspěšní zápasníci z Východních čech. Po příchodu do Prahy již v trénování nechtěl pokračovat. Byl ale osloven a doslova “ukecán” partou nadšenců a trénovat opět začal. V té době klub působil v tělocvičně Pro7sport.

          Od začátku byl a je součástí oddílu Matúš Juráček, dále přišel Miroslav Brož, o trochu déle se objevili Jaroslav Hrdlička, Jan Klouda a David Hošek. Také se rozrostl trenérský tým o Romana Čedíka specialistu na Brazilské Jiu-Jitsu. Toto pevné jádro je v podstatě stejné do dnes. Po neshodách s majitelem tělocvičny Pro7sport, klub tuto tělocvičnu i její jméno opustil a začal vystupovat pod novým názvem Renegade Prague Gym. Od doby založení prošli a zápasili či zápasí za klub taková jména jako Jaroslav ”Číňan” Poborský, Václav ”Baba Jaga” Mikulášek, Tomáš "Thor” Kužela, Yevhenii Orlov, Lu Kai, Martin Šolc, Petr ”Píno”  Ondruš, Lukáš Olejník, Pavel Šusta, Radek Šopov, Dennis Poborský, Alexandr Cverna, Jakub Dittrich, Viktor Pavlíček, Jan Maršálek, Vít Mrákota, Petr Novák, Michal ”Krutor” Lebduška, Roland Čambal a další.

          Zápasníci RPG bojují v MMA organizacích jako je OKTAGON, RFA, ROAD to UFC, KSW, FIGHT NIGHT GLOBAL, GCF, IAF a další. Nedávno se ke klubu přidal Jano Horák se svým oddílem dětí a mládeže. Nyní má klub dvě působiště , na dvou koncích Prahy. Profesionálové tedy MMA A pod vedením Davida Vyvážila a Romana Čedíka, děti pod vedením Jano Horáka a RPG boxerský oddíl pod vedením Richarda Hese trénují ve Štěrbohlích (prostory DAILY FITNESS). Amatěři tedy MMA B pod vedením Jaroslava Hrdličky a Jana Kloudy trénují v Modřanech (prostory VAULT GYM).

          Při tréninku profesionálů spolupracuje RPG s úzce specializovanými gymy a trenéry, jako jsou boxerští trenéři Michal Soukup a Luboš Šuda, thaiboxerští trenéři Viktor Petrlík, Zdeněk Švamberk a Petr Ondruš či specialista na grapling Richard Andrš.
        </AboutSectionP>
        <FacebookSection>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frngpraguegym&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="340" height="500">
            allowFullScreen={true}
            </iframe>
        </FacebookSection>
      </AboutWrapper>
    </AboutContainer>
  )
}

export default About;