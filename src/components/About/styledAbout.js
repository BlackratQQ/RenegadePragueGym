import styled from 'styled-components'
import {red, white} from "../../Theme";

export const AboutContainer = styled.div`
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
			margin-bottom: -10px;
			height: 2px;
			position: absolute;
			background: ${red};
			transition: width 0.3s ease 0s, left 0.3s ease 0s;
			width: 90%;
			left: 5%;
		}
	}
`
export const AboutWrapper = styled.div`
	display: flex;
	max-width: 1600px;
	margin-top: 40px;

`

export const AboutSectionP = styled.p`
	color: ${white};
	flex: 2;
`

export const FacebookSection = styled.div`
	flex: 1;
`