import React from 'react'
import Coach from "./Coach";
import {Container, ContainerWrapper} from "./styledCoaches";
import {HeadingH2} from "../../Theme/HeadingH1";


const dataCoaches = () => {
  const coaches = [
    {
      id: 1,
      name: 'David Vyvážil',
      role: 'Head Coach',
      role2: '',
      photo: '../../images/Photo1.jpg',
      paragraph1: 'aaaaaaaaaaaaaaaaaaaa',
      paragraph2: 'bbbbbbbbbbbbbbbbbbbb',
      paragraph3: 'cccccccccccccccccccc',
      paragraph4: 'dddddddddddddddddddd',
      textPosition: 'center',
    },
    {
      id: 1,
      name: 'Richard Hes',
      role: 'Silový a kondiční trenér',
      role2: 'Trenér boxu',
      photo: '../../images/Photo1.jpg',
      paragraph1: 'aaaaaaaaaaaaaaaaaaaa',
      paragraph2: 'bbbbbbbbbbbbbbbbbbbb',
      paragraph3: 'cccccccccccccccccccc',
      paragraph4: 'dddddddddddddddddddd',
      textPosition: 'center',
    }
  ]

  const coachList = coaches.map(coach =>
    <Coach coach={coach}/>
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