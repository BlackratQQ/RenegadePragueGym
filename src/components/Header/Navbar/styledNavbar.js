import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'
import {FaCaretDown} from "react-icons/fa";
import {darkRed, green, white} from "../../../Theme";


export const Nav = styled.nav`
	background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
	height: 80px;
	display: flex;
	justify-content: center;
	font-size: 1.5rem;
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
  text-transform: uppercase;
  font-weight: 700;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1500px;

`

export const NavLogo = styled(LinkRouter)`
	color: ${white};
	display: flex;
	justify-self: flex-start;
	cursor: pointer;
	font-size: 1.5rem;
	align-items: center;
	margin-left: 24px;
	font-weight: bold;
	text-decoration: none;
`

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: ${white};
	}
`

export const NavMenu = styled.ul`
	display: flex;
	list-style: none;
	margin-right: -22px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`

export const NavItem = styled.li`
	height: 80px;
	display: flex;
	align-items: center;
  position: relative;

/*Animated underline*/
	&:after {
		bottom: 0;
		content: "";
		display: block;
		height: 3px;
		left: 50%;
		position: absolute;
		background: ${darkRed};
		transition: width 0.3s ease 0s, left 0.3s ease 0s;
		width: 0;
	}
	&:hover:after {
		width: 100%;
		left: 0;
	}
`

export const NavLinks = styled(LinkScroll)`
	color: ${white};
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&.active {
		border-bottom: 3px solid ${darkRed};
	}
/*Just under line*/
	// &:hover {
	// 	border-bottom: 3px solid ${green};
	// 	color: ${green};
	// }
  
`

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`

export const NavBtnLink = styled(LinkRouter)`
	border-radius: 50px;
	background: ${green};
	white-space: nowrap;
	padding: 10px 22px;
	color: #010606;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${white};
		color: #010606
	}
`

export const ArrowDown = styled(FaCaretDown)`
	margin-left: 5px;
`
























