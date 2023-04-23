import styled from 'styled-components';

export const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

export const Boton = styled.button`
	display: flex;
	align-items: center;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #fc4747;
	cursor: pointer;
	font-family: 'Outfit', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
	&:hover {
		background: #0066FF;
	}
`;

export const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;