import './style.scss';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Header } from '../../components/header';
import { style } from './style';

const View = React.memo((props) => {
	const { children } = props;


	return (
		<Container fluid className={'layout layout--base'}>
			<header className={'layout__header'}><Header /></header>
			<main className={'layout__content'} style={style.content}>{children}</main>
			<div className={'layout__footer'}></div>
		</Container>
	);
});

export { View };
