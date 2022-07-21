import styled from 'styled-components'
import {blackLight, darkRed, fourthHeading, red, thirdHeading, white} from "../../Theme/index";

export const Container = styled.div`
	background-color: ${blackLight};
	padding-bottom: 40px;

	h2 {
		position: relative;
		text-align: center;
		color: ${white};


		margin-bottom: 64px;

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
			width: 10%;
			left: 45%;
		}
`

export const ContainerWrapper = styled.div`
	max-width: 1600px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	grid-gap: 16px;
	padding: 0 50px;

	@media screen and (max-width: 1200px) {
		grid-template-columns: 1fr;
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
`

export const ContainerCard = styled.div`
	max-width: 800px;
	margin: 0 auto;
	display: flex;
	gap: 2rem;
	//align-items: center;
	margin-top: 35px;
  

	&:nth-child(even) {
		flex-direction: row-reverse;
	}

	@media screen and (max-width: 768px) {
		display: grid;
		grid-template-columns: 1fr;
	}
`

export const CardImg = styled.img`

	max-width: 300px;
  max-height: 375px;
	margin: 0 auto;
	float: left;
`

export const CardInfo = styled.div`

`

export const TitleWrapper = styled.div`
	text-align: ${props => props.setAlign};
	margin-top: 30px;

	h3 {
		color: ${white};
		font-size: ${thirdHeading};
		margin-bottom: 10px;
		line-height: 0.6;

		&:nth-child(2) {
			color: lightgreen;
		}
	}

	h4 {
		color: ${red};
		font-size: ${fourthHeading}
		margin-bottom: 10px;
	}
`

export const CardP = styled.div`
	color: ${white};
	text-align: ${props => props.setAlign};
`

export const Paragraph1 = styled.p`
margin-bottom: 10px;
`

export const Paragraph2 = styled(Paragraph1)`

`

export const Paragraph3 = styled(Paragraph1)`

`

export const Paragraph4 = styled(Paragraph1)`

`
