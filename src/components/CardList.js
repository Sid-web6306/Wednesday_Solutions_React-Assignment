import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const List = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex: 0 1 auto;
	justify-content: center;
	padding-top: 80px;
	margin-top: 50px;
`;

const CardList = ({ items }) => {
	const itemsArray = items.map((item, index) => <Card key={index} {...item} />);
	return <List>{itemsArray}</List>;
};

export default CardList;