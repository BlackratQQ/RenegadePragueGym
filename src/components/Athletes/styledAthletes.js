import styled from 'styled-components'
import {
  black,
  darkRed,
  fourthHeading,
  red,
  thirdHeading,
  white
}
from "../../Theme/index";

import {FaFacebookF, FaInstagram} from 'react-icons/fa';

export const AthleteContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #010606;
	padding-bottom: 20px;
  
  h2 {
		position: relative;
		text-align: center;
		color: ${white};
		margin-bottom: 16px;
    
		@media screen and (max-width: 480px) {
			font-size: 2rem;
		}

		/*underline*/

		&:after {
			bottom: 0;
			content: "";
			display: block;
			height: 2px;
			position: absolute;
			background: ${red};
			transition: width 0.3s ease 0s, left 0.3s ease 0s;
			width: 90%;
			left: 5%;
		}
  }
`

export const CenterWrapper = styled.div`
	display: flex;
`

export const AthleteWrapper = styled.div`
	display: inline-flex;
	flex-wrap: wrap;
	margin: auto;
	justify-content: center;
	grid-gap: 16px;
`

export const AthleteMainP = styled.p`
	text-align: center;
	color: ${white};
	margin-bottom: 64px;
`

export const AthleteCards = styled.div`
	background: ${black};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	padding: 5px 30px 5px 30px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
	transition: all 0.2s ease-in-out;
  height: 750px;

	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`

export const SportWrapper = styled.div`
	width: 100%;
`

export const SportName = styled.h4`
	color: ${red};
	font-size: ${fourthHeading};
	margin-bottom: 10px;
`

export const SocialWrapper = styled.div`
	width: 100%;
	display: flex;
	gap: 10px;
	margin-bottom: 10px;
`

export const FacebookIcon = styled(FaFacebookF)`
	color: ${white};
	font-size: 2.3rem;
	background-image: url(https://www.google.com);

	&:hover {
		color: ${red}
	}
`

export const InstagramIcon = styled(FaInstagram)`
	color: ${white};
	font-size: 2.3rem;

	&:hover {
		color: ${red}
	}
`

export const AthletePhoto = styled.img`
	margin-bottom: 10px;
  width: 300px;
	box-shadow: inset 0px -5px 6px -3px ${darkRed};
  
	&:hover {
		box-shadow: inset 0px -5px 6px 0px ${darkRed};
	}
`

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
`
export const Button = styled.button`
	color: ${white};
	transition: 0.25s;
	background: ${darkRed};
	border: 2px solid ${darkRed};
	font: inherit;
	line-height: 1;
	margin: 0.5em;
	padding: .8em 1.5em;


	font-size: 1.5rem;
	font-weight: 900;
	text-transform: uppercase;


	&:hover, &:focus {
		box-shadow: inset 0 0 0 2em #000;
		cursor: pointer;
		border-color: ${darkRed};
		color: #fff;
	}
`

export const NameWrapperH3 = styled.h3`
	width: 100%;
`

export const FirstName = styled.span`
	display: block;
	font-size: ${thirdHeading};
	color: ${white};
	text-align: left;
`

export const Nickname = styled.span`
	display: block;
	font-size: ${thirdHeading};
	color: ${white};
	text-align: center;
`

export const LastName = styled.span`
	display: block;
	font-size: ${thirdHeading};
	color: ${white};
	text-align: right;
`