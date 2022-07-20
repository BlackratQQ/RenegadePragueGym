import styled from 'styled-components'
import {fifthHeading, firstHeading, fourthHeading, secondHeading, thirdHeading} from "./index";

export const HeadingH1 = styled.h1`
  font-size: ${({size}) => (size ? `${size}rem` : firstHeading)};
`

export const HeadingH2 = styled.h2`
  font-size: ${({size}) => (size ? `${size}rem` : secondHeading)};
`

export const HeadingH3 = styled.h3`
  font-size: ${({size}) => (size ? `${size}rem` : thirdHeading)};
`

export const HeadingH4 = styled.h4`
  font-size: ${({size}) => (size ? `${size}rem` : fourthHeading)};
`

export const HeadingH5 = styled.h5`
  font-size: ${({size}) => (size ? `${size}rem` : fifthHeading)};
`