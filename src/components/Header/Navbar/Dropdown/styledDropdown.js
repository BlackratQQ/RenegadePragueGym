import styled from 'styled-components'
import {green, white} from "../../../../Theme";
import {Link} from 'react-router-dom';

export const Wrapper = styled.ul`
	background: ${white};
	width: 200px;
	position: absolute;
	top: 80px;
	list-style: none;
	text-align: center;
	transform: translateX(-73%);
  
  &:hover{
    
  }
`

export const WrapperLi = styled.li`
	background: #000;
	cursor: pointer;
	color: #fff;
  
	&:hover {
		background: ${green};
	}
`

export const MenuLink = styled(Link)`
	display: block;
	height: 100%;
	width: 100%;
	text-decoration: none;
	color: #fff;
	padding: 16px;

	&:only-child {
		margin-left: 12.5%;
		width: 75%;
		border-bottom: 1px solid ${green};
	}




`