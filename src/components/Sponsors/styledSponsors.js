import styled, {css} from 'styled-components'


export const WrapperLink = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	flex-wrap: wrap;

	background-color: #000000;
	padding: 20px 0;

	img {
		transform: scale(.9);
		
	}
  
  img:hover{
		transform: scale(.95);
		transition: transform .25s ease;
  }

	@media screen and (max-width: 700px) {
		img {
			width: 300px;
      height: auto;
		}
	}

	//img:hover {
	//	transform: scale(1);
	//}
	//
	//a:first-child{
	//  flex: 50%;
	//  text-align: right;
	//}
	//a:last-child {
	//	flex: 50%;
	//}

`

export const NavozTo = styled.img`
	${({justifySelf}) => (justifySelf === 'left' ? css`justify-self: left;` : css`justify-self: right;`)}

`

export const Miestate = styled.img`

`
