import React from 'react';
import { useSelector } from 'react-redux';

import './Topbar.scss';
import Settings from 	'../Settings';

export default function Topbar () {
	const isLogged = useSelector(state => state.authorization.isLogged);

	return (
		<header className="Header">
			<div className='Header--title'>
				<span>VUTTR</span>
				<p>Very Useful Tools to Remember</p>
			</div>
			{ isLogged && <Settings/> }
		</header>
	);
}