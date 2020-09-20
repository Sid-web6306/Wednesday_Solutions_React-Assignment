import React from 'react';
import styled from 'styled-components';
import Palette from '../palette';

const Card = styled.div`
	height: 200px;
  width: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  white-space: nowrap;
	margin: 10px 5px;
	padding: 5px;
	background-color: ${Palette('Grey', 600)};
	color: ${Palette('White')};
	transition: all .3s ease-in-out;
	:hover {
		transform: scale(1.03);
		box-shadow: 0 0 0.75rem ${Palette('Secondary', 'dark')};
	}
	:active{
		transform: scale(0.8);
	}
`;

const CardText = styled.div`
	overflow: hidden;
	text-overflow: ellipsis;
`;

const Item = ({ kind, artistName, trackName, artworkUrl100 }) => (
	<Card style={{borderRadius:'5px'}}>
		<div style={{marginTop: '10px'}}>
			<img src={artworkUrl100} />
		</div>
		<div style={{fontWeight: 800,textTransform:'capitalize'}}>Category: {kind}</div>
		<CardText>ArtistName: {artistName}</CardText>
		<CardText>Song: {trackName}</CardText>
		
	</Card>
);

export default Item;
