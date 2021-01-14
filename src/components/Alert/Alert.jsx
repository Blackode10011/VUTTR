import React from 'react';
import { useDispatch } from 'react-redux';
import { handleCloseAlert } from '../../actions';

import './Alert.scss';
import ToolIcon from '../../assets/icons/Icon-Tool-2px.svg';

function Alert({message}) {
	const dispatch = useDispatch();
	return (
		<div className='container'>
			<div className='Alert'>
				<nav className='Alert_header'>
					<div className='Alert_header--title'>
						<img src={ToolIcon} alt='ToolIcon'/>
						<span> VUTTR</span>
					</div>
				</nav>
				<nav className='Alert_content'>
					<span>{message}!</span>
					<button 
						onClick={() => {dispatch(handleCloseAlert())}}>
						Ok!
					</button>
				</nav>
			</div>
		</div>
	);
};

export default Alert;